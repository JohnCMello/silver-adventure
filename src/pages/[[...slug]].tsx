import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { useAppRoutesQuery } from '@libs/graphql/contenftul/app-routes/app-routes.query'
import { useCtfPageQuery } from '@libs/graphql/contenftul/ctf-page/ctf-page.query'
import { useTranslations } from 'next-intl'
import { fetchTranslations, transformAppRoutes, extractLocaleFromSlug, Locale } from '@libs/i18n'
import { CtfComponentResolver, ctfResolverPrefetchContent } from '@ctf-component-resolver'
import { LayoutExample } from '@layouts/layout-example'

const ErrorPageNotFound = () => {
  const t = useTranslations('error')
  return <h1>{t('error-no-page-content')}</h1>
}

type NextPageWithLayout<P> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}
type Props = { slug: string; locale: Locale }
const Page: NextPageWithLayout<Props> = (props) => {
  const { slug, locale } = props
  const { data } = useCtfPageQuery({ slug, locale }, { enabled: false })
  const page = data?.pageCollection?.items[0]

  if (!page) return <ErrorPageNotFound />

  const pageContentProps = page.pageContent

  if (!pageContentProps) return <ErrorPageNotFound />

  const {
    __typename: typename,
    sys: { id },
  } = pageContentProps
  return (
    <>
      <Head>
        <title>{page.seo?.title || ''}</title>
        <meta name='description' content={page.seo?.description || ''} />
      </Head>
      <CtfComponentResolver id={id} typename={typename} locale={locale} />
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <LayoutExample>{page}</LayoutExample>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fetchAppRoutes = useAppRoutesQuery.fetcher()
  const query = await fetchAppRoutes()
  const { paths } = transformAppRoutes(query)
  const outputPaths = Array.from(paths)

  return {
    fallback: false,
    paths: outputPaths,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slugParams = context.params?.slug as string[] | undefined
  const [locale, slugWithoutLocale] = extractLocaleFromSlug(slugParams)

  const slug = slugWithoutLocale || 'home'

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(useAppRoutesQuery.getKey(), useAppRoutesQuery.fetcher())
  const messages = await fetchTranslations(locale)

  try {
    const pageQueryData = await useCtfPageQuery.fetcher({ slug, locale })()
    queryClient.setQueryData(useCtfPageQuery.getKey({ slug, locale }), pageQueryData)

    const pageContent = pageQueryData.pageCollection?.items[0]?.pageContent
    if (!pageContent) return { notFound: true }
    const {
      __typename: typename,
      sys: { id },
    } = pageContent

    await ctfResolverPrefetchContent({ typename, id, locale }, queryClient)

    return {
      props: {
        slug,
        locale,
        messages,
        dehydratedState: dehydrate(queryClient),
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        slug,
        locale,
        messages,
        dehydratedState: dehydrate(queryClient),
      },
    }
  }
}

export default Page
