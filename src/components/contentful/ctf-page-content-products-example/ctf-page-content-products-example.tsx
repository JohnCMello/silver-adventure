import { useCtfPageContentProductsExampleQuery } from './ctf-page-content-products-example.query'
import { CtfComponentResolver, CtfResolvedComponentProps } from '@ctf-component-resolver'

export function CtfPageContentProductsExample(props: CtfResolvedComponentProps) {
  const { id, locale } = props
  const { data } = useCtfPageContentProductsExampleQuery({ id, locale })

  const heroBanner = data?.pageContentProductsExample?.heroBanner
  const heroBannerTypename = heroBanner?.__typename || ''
  const heroBannerId = heroBanner?.sys?.id || ''

  return <CtfComponentResolver typename={heroBannerTypename} id={heroBannerId} locale={locale} />
}
