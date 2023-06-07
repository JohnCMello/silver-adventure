import { useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, DehydratedState } from '@tanstack/react-query'
import { queryConfig, QueryClientProvider } from '@libs/react-query'
import { AbstractIntlMessages } from 'next-intl'
import { Locale, I18nProvider } from '@libs/i18n'
import { EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@libs/theme'

type MyAppProps = AppProps<{
  dehydratedState: DehydratedState
  messages: AbstractIntlMessages
  locale: Locale
  emotionCache?: EmotionCache
}> & { Component: { getLayout?: (page: React.ReactElement) => React.ReactNode } }
export default function MyApp({ Component, pageProps: originalPageProps }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient(queryConfig))
  const { dehydratedState, messages, emotionCache, ...pageProps } = originalPageProps
  const { locale } = pageProps

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider emotionCache={emotionCache}>
      <QueryClientProvider client={queryClient} dehydratedState={dehydratedState}>
        <I18nProvider locale={locale} messages={messages}>
          {getLayout(<Component {...pageProps} />)}
        </I18nProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
