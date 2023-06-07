import { CtfResolvedComponentProps } from '@ctf-component-resolver'
import { useCtfComponentHeroBannerExampleQuery } from './ctf-component-hero-banner-example.query'
import { HeroBannerExample } from '@organisms/hero-banner-example/hero-banner-example'

export function CtfComponentHeroBannerExample(props: CtfResolvedComponentProps) {
  const { locale, id } = props
  const { data } = useCtfComponentHeroBannerExampleQuery({ id, locale })
  const { title, backgroundImage } = data?.componentHeroBannerExample || {}
  return (
    <HeroBannerExample
      title={title || ''}
      backgroundImage={{ alt: backgroundImage?.title || '', url: backgroundImage?.url || '' }}
    />
  )
}
