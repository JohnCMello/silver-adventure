import { useAppRoutesQuery } from '@libs/graphql/contenftul/app-routes/app-routes.query'
import { extractLocaleFromPath, fetchTranslations, i18nConfig } from '@libs/i18n'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { createTranslator } from 'next-intl'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Error404() {
  const { isReady } = useRouter()
  const [errorMessage, setErrorMessage] = useState<string>()
  useEffect(() => {
    if (!isReady) return
    const path = window.location.pathname
    const [locale] = extractLocaleFromPath(path)
    fetchTranslations(locale).then((messages) => {
      const t = createTranslator({ messages, locale, namespace: 'error' })
      const message = t('error-page-not-found')
      setErrorMessage(message)
    })
  }, [isReady])
  return <h1>{errorMessage}</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const locale = i18nConfig.defaultLocale
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(useAppRoutesQuery.getKey(), useAppRoutesQuery.fetcher())
  const messages = await fetchTranslations(locale)

  return {
    props: {
      locale,
      messages,
      dehydratedState: dehydrate(queryClient),
    },
  }
}
