import { Locale } from '@libs/i18n'
import { ctfResolverMappings } from './ctf-component-resolver-mappings'
import { QueryClient } from '@tanstack/react-query'

type CtfComponent = {
  __typename: string
  sys: { id: string }
}
type CtfComponentCollection = { items: Partial<CtfComponent>[] }

type MaybeCtfComponent = (Partial<CtfComponentCollection> & Partial<CtfComponent>) | string | undefined

type CtfComponentFields = {
  [field: string]: MaybeCtfComponent
}

type QueryResult = {
  [queryAlias: string]: CtfComponentFields | null
}

type CtfComponentData = { typename: string; id: string }
const generateCtfComponentsData = (prefetchData: CtfComponentFields): CtfComponentData[] => {
  const isCtfComponentCollection = (field: MaybeCtfComponent): field is CtfComponentCollection => {
    if (typeof field === 'string' || !field) return false
    return !!field.items
  }
  const isCtfComponent = (field: MaybeCtfComponent): field is CtfComponent => {
    if (typeof field === 'string' || !field) return false
    return !!field.__typename && !!field.sys?.id
  }

  const transformCtfComponent = (field: CtfComponent): CtfComponentData => {
    return { id: field.sys.id, typename: field.__typename }
  }

  const transformCtfComponentCollection = (field: CtfComponentCollection): CtfComponentData[] => {
    return field.items.filter(isCtfComponent).map(transformCtfComponent)
  }

  return Object.values(prefetchData)
    .filter((fieldValue) => isCtfComponent(fieldValue) || isCtfComponentCollection(fieldValue))
    .flatMap((fieldValue) => {
      if (isCtfComponent(fieldValue)) return transformCtfComponent(fieldValue)
      if (isCtfComponentCollection(fieldValue)) return transformCtfComponentCollection(fieldValue)
      return []
    })
}

export async function ctfResolverPrefetchContent(
  { id, typename, locale }: { id: string; typename: string; locale: Locale },
  queryClient: QueryClient
) {
  const ctfResolvedComponentData = ctfResolverMappings[typename]
  if (!ctfResolvedComponentData) {
    return console.warn(`Couldn't find mapping for "${typename}" for locale "${locale}".`)
  }
  if (!ctfResolvedComponentData.prefetch) return
  if (ctfResolvedComponentData.prefetch.length === 0) return

  const variables = { id, locale }
  const prefetchList = ctfResolvedComponentData.prefetch.map(
    (item) => item.fetcher(variables)() as Promise<QueryResult>
  )

  const queryResultList = await Promise.all(prefetchList)
  for (let i = 0; i < queryResultList.length; i++) {
    const queryKeys = ctfResolvedComponentData.prefetch[i].getKey(variables)
    const queryData = queryResultList[i]
    queryClient.setQueryData(queryKeys, queryData)
  }

  const ctfComponentsDataList = queryResultList.flatMap((queryResult) => {
    return Object.values(queryResult).flatMap((queryAliasValue) =>
      queryAliasValue ? generateCtfComponentsData(queryAliasValue) : []
    )
  })

  for (let i = 0; i < ctfComponentsDataList.length; i++) {
    const ctfComponentData = ctfComponentsDataList[i]
    await ctfResolverPrefetchContent(
      { id: ctfComponentData.id, typename: ctfComponentData.typename, locale },
      queryClient
    )
  }
}
