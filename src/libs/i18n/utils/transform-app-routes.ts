import { AppRoutesQuery } from '@libs/graphql/graphql.types'
import { RouteMap, RouteMappings, RoutePaths } from '../i18n-routes.context'
import { makePath } from './make-path'
import { Locale, i18nConfig, DefaultLocale } from '../i18n.config'

type LocalesWithoutDefault = Exclude<Locale, DefaultLocale>

export function transformAppRoutes(queryData: AppRoutesQuery) {
  const mappings = new Map() as RouteMappings
  const paths = new Set() as RoutePaths

  const pages = (queryData.pageCollection && queryData.pageCollection.items) || []
  const locales = i18nConfig.locales.filter((locale) => locale !== i18nConfig.defaultLocale) as LocalesWithoutDefault[]

  const localeRoutes = pages.reduce((output, page) => {
    i18nConfig.locales.forEach((locale) => {
      if (!page) return
      if (!output[locale]) {
        output[locale] = new Set<string>()
      }

      const localeSlug =
        locale === i18nConfig.defaultLocale ? page?.slug : (page as Record<string, string | null | undefined>)[locale]
      const path = makePath(localeSlug)

      if (!path) return
      output[locale].add(path)
    })
    return output
  }, {} as Record<Locale, Set<string>>)

  for (const page of pages) {
    if (!page) continue
    const defaultLocaleSlug = makePath(page?.slug)

    const localeMap = locales
      .filter((locale) => locale in page)
      .map((locale) => {
        const localeSlug = (page as Record<string, string | null | undefined>)[locale]
        const path = makePath(localeSlug)
        return [locale, path] as const
      })

    const routeMap = localeMap.reduce((output, [locale, path]) => {
      return {
        ...output,
        [locale]: path,
      }
    }, {} as RouteMap)

    if (defaultLocaleSlug) {
      mappings.set(defaultLocaleSlug, routeMap)
    }

    defaultLocaleSlug && paths.add(defaultLocaleSlug)
    localeMap.forEach(([locale, path]) => {
      if (!path) return
      const pathWithLocale = `/${locale}${path}`
      paths.add(pathWithLocale)
    })
  }

  return {
    paths,
    mappings,
    localeRoutes,
  }
}
