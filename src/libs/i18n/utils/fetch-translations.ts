import { Locale } from '../i18n.config'

export async function fetchTranslations(locale: Locale): Promise<IntlMessages> {
  return (await import(`@libs/i18n/messages/${locale}.json`)).default
}
