import { CtfPageContentHomeExample, useCtfPageContentHomeExampleQuery } from '@contentful/ctf-page-content-home-example'
import {
  CtfComponentHeroBannerExample,
  useCtfComponentHeroBannerExampleQuery,
} from '@contentful/ctf-component-hero-banner-example'

import { QueryKey } from '@tanstack/react-query'
import { Locale } from '@libs/i18n'
import { CtfResolvedComponentProps } from './ctf-component-resolver'
import {
  CtfPageContentAboutUsExample,
  useCtfPageContentAboutUsExampleQuery,
} from '@contentful/ctf-page-content-about-us-example'
import {
  CtfPageContentProductsExample,
  useCtfPageContentProductsExampleQuery,
} from '@contentful/ctf-page-content-products-example'
import {
  CtfPageContentProductDetailsExample,
  useCtfPageContentProductDetailsExampleQuery,
} from '@contentful/ctf-page-content-product-details-example'

type Prefetcher = {
  getKey: (variables: { id: string; locale: Locale }) => QueryKey
  fetcher: (variables: { id: string; locale: Locale }) => () => Promise<unknown>
}

type CtfResolvedComponentData = {
  component: React.ComponentType<CtfResolvedComponentProps>
  prefetch?: Prefetcher[]
}

type CtfResolverMappings = {
  [key: string]: CtfResolvedComponentData
}

export const ctfResolverMappings: CtfResolverMappings = {
  PageContentHomeExample: {
    component: CtfPageContentHomeExample,
    prefetch: [useCtfPageContentHomeExampleQuery],
  },
  PageContentAboutUsExample: {
    component: CtfPageContentAboutUsExample,
    prefetch: [useCtfPageContentAboutUsExampleQuery],
  },
  PageContentProductsExample: {
    component: CtfPageContentProductsExample,
    prefetch: [useCtfPageContentProductsExampleQuery],
  },
  PageContentProductDetailsExample: {
    component: CtfPageContentProductDetailsExample,
    prefetch: [useCtfPageContentProductDetailsExampleQuery],
  },
  ComponentHeroBannerExample: {
    component: CtfComponentHeroBannerExample,
    prefetch: [useCtfComponentHeroBannerExampleQuery],
  },
}
