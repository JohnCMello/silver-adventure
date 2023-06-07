import { i18nConfig } from '../i18n.config'
export const extractLocaleFromSlug = (localeSegment: string[] | undefined) => {
  const locales = i18nConfig.locales
  const [firstSegment, ...rest] = localeSegment || [i18nConfig.defaultLocale]

  const locale = locales.find((locale) => locale === firstSegment) || i18nConfig.defaultLocale
  const slugWithoutLocale = firstSegment === locale ? rest.join('/') : [firstSegment, ...rest].join('/')
  return [locale, slugWithoutLocale] as const
}
