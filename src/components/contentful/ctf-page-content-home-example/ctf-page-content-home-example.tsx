import { useCtfPageContentHomeExampleQuery } from './ctf-page-content-home-example.query'
import { CtfComponentResolver, CtfResolvedComponentProps } from '@ctf-component-resolver'

export function CtfPageContentHomeExample(props: CtfResolvedComponentProps) {
  const { id, locale } = props
  const { data } = useCtfPageContentHomeExampleQuery({ id, locale })

  const homeContent = data?.pageContentHomeExample?.componentsCollection?.items.map((item) => {
    return { typename: item?.__typename || '', id: item?.sys.id || '' }
  })

  return (
    <>
      {homeContent?.map((item) => (
        <CtfComponentResolver key={item.id} typename={item.typename} id={item.id} locale={locale} />
      ))}
    </>
  )
}
