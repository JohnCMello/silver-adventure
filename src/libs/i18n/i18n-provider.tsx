import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { I18nRoutesProvider } from './i18n-routes.context'
import { Locale, i18nConfig } from './i18n.config'

type I18nProviderProps = { children: React.ReactNode; locale: Locale; messages: AbstractIntlMessages }
export function I18nProvider(props: I18nProviderProps) {
  const { children, locale, messages } = props
  return (
    <I18nRoutesProvider locale={locale}>
      <NextIntlProvider messages={messages} locale={locale || i18nConfig.defaultLocale}>
        {children}
      </NextIntlProvider>
    </I18nRoutesProvider>
  )
}
