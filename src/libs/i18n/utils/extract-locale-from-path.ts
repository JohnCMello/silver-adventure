import { extractLocaleFromSlug } from './extract-locale-from-slug'

export const extractLocaleFromPath = (path: string) => {
  const slug = path.split('/').filter((segment) => !!segment)
  const [locale, ...rest] = extractLocaleFromSlug(slug)
  const slugWithoutLocale = ['', ...rest].join('/')
  return [locale, slugWithoutLocale] as const
}
