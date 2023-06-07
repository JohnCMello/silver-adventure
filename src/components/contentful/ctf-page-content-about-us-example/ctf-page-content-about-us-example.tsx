import { useCtfPageContentAboutUsExampleQuery } from './ctf-page-content-about-us-example.query'
import { CtfComponentResolver, CtfResolvedComponentProps } from '@ctf-component-resolver'

export function CtfPageContentAboutUsExample(props: CtfResolvedComponentProps) {
  const { id, locale } = props
  const { data } = useCtfPageContentAboutUsExampleQuery({ id, locale })

  const heroBanner = data?.pageContentAboutUsExample?.heroBanner
  const heroBannerTypename = heroBanner?.__typename || ''
  const heroBannerId = heroBanner?.sys?.id || ''

  return <CtfComponentResolver typename={heroBannerTypename} id={heroBannerId} locale={locale} />
}
