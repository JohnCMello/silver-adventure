import { ReactNode, createContext, useContext, useMemo } from 'react'

import { useAppRoutesQuery } from '@libs/graphql/contenftul/app-routes/app-routes.query'
import { transformAppRoutes } from './utils/transform-app-routes'
import { Locale, i18nConfig } from './i18n.config'

export type RoutePaths = Set<string>
export type RouteMap = Record<string, string | null>
export type RouteMappings = Map<string, RouteMap>
export type LocaleRoutes = Record<Locale, Set<string>>

const DEFAULTS = {
  paths: new Set() as RoutePaths,
  mappings: new Map() as RouteMappings,
  locale: i18nConfig.defaultLocale as Locale,
  localeRoutes: {} as LocaleRoutes,
}

const context = createContext(DEFAULTS)

type ProviderProps = {
  children: ReactNode
  locale: Locale
}
export const I18nRoutesProvider = ({ children, locale }: ProviderProps) => {
  const { data } = useAppRoutesQuery(undefined, { enabled: false })
  const routesPathsMappings = useMemo(() => {
    if (!data) return null
    return transformAppRoutes(data)
  }, [data])

  const providerValue = routesPathsMappings
    ? {
        ...routesPathsMappings,
        locale,
      }
    : DEFAULTS

  return <context.Provider value={providerValue}>{children}</context.Provider>
}

export const useI18nRoutesContext = () => {
  return useContext(context)
}
