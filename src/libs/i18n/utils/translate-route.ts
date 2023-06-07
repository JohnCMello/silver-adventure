import { RouteMap, RouteMappings } from '../i18n-routes.context'

export function translateRoute(mappings: RouteMappings, originalPath: string, locale: string) {
  const translatedPath = mappings.get(originalPath)

  const isTranslation = !!translatedPath
  const hasTranslation = isTranslation ? locale in translatedPath : false

  if (!hasTranslation) return originalPath

  return `/${locale}/${(translatedPath as RouteMap)[locale]}`
}
