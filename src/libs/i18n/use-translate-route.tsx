import { useCallback } from 'react'
import { useI18nRoutesContext } from './i18n-routes.context'
import { i18nConfig } from './i18n.config'

export const useTranslateRoute = () => {
  const { mappings, locale } = useI18nRoutesContext()

  const routeTranslator = useCallback(
    (href: string) => {
      const pathLocales = mappings.get(href)

      if (!pathLocales) return href

      const localizedPath = pathLocales[locale] || ''
      const localizedHref = locale === i18nConfig.defaultLocale ? href : `/${locale}${localizedPath}`
      return localizedHref
    },
    [locale, mappings]
  )

  return routeTranslator
}
