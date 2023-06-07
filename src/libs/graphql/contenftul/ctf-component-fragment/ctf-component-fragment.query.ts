import * as Types from '../../graphql.types';

export type CtfComponentFragment_ComponentBase_Fragment = { __typename: 'ComponentBase', sys: { __typename?: 'Sys', id: string } };

export type CtfComponentFragment_ComponentHeroBannerExample_Fragment = { __typename: 'ComponentHeroBannerExample', sys: { __typename?: 'Sys', id: string } };

export type CtfComponentFragment_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

export type CtfComponentFragment_PageContentAboutUsExample_Fragment = { __typename: 'PageContentAboutUsExample', sys: { __typename?: 'Sys', id: string } };

export type CtfComponentFragment_PageContentBase_Fragment = { __typename: 'PageContentBase', sys: { __typename?: 'Sys', id: string } };

export type CtfComponentFragment_PageContentHomeExample_Fragment = { __typename: 'PageContentHomeExample', sys: { __typename?: 'Sys', id: string } };

export type CtfComponentFragment_PageContentProductDetailsExample_Fragment = { __typename: 'PageContentProductDetailsExample', sys: { __typename?: 'Sys', id: string } };

export type CtfComponentFragment_PageContentProductsExample_Fragment = { __typename: 'PageContentProductsExample', sys: { __typename?: 'Sys', id: string } };

export type CtfComponentFragment_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

export type CtfComponentFragmentFragment = CtfComponentFragment_ComponentBase_Fragment | CtfComponentFragment_ComponentHeroBannerExample_Fragment | CtfComponentFragment_Page_Fragment | CtfComponentFragment_PageContentAboutUsExample_Fragment | CtfComponentFragment_PageContentBase_Fragment | CtfComponentFragment_PageContentHomeExample_Fragment | CtfComponentFragment_PageContentProductDetailsExample_Fragment | CtfComponentFragment_PageContentProductsExample_Fragment | CtfComponentFragment_Seo_Fragment;

export const CtfComponentFragmentFragmentDoc = `
    fragment CtfComponentFragment on Entry {
  __typename
  sys {
    id
  }
}
    `;