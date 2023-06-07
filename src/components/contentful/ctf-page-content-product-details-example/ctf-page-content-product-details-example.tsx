import { useCtfPageContentProductDetailsExampleQuery } from './ctf-page-content-product-details-example.query'
import { CtfComponentResolver, CtfResolvedComponentProps } from '@ctf-component-resolver'

export function CtfPageContentProductDetailsExample(props: CtfResolvedComponentProps) {
  const { id, locale } = props
  const { data } = useCtfPageContentProductDetailsExampleQuery({ id, locale })

  const heroBanner = data?.pageContentProductDetailsExample?.heroBanner
  const heroBannerTypename = heroBanner?.__typename || ''
  const heroBannerId = heroBanner?.sys?.id || ''

  return <CtfComponentResolver typename={heroBannerTypename} id={heroBannerId} locale={locale} />
}
