import * as Types from '../../graphql.types';

import { CtfComponentFragment_ComponentBase_Fragment, CtfComponentFragment_ComponentHeroBannerExample_Fragment, CtfComponentFragment_Page_Fragment, CtfComponentFragment_PageContentAboutUsExample_Fragment, CtfComponentFragment_PageContentBase_Fragment, CtfComponentFragment_PageContentHomeExample_Fragment, CtfComponentFragment_PageContentProductDetailsExample_Fragment, CtfComponentFragment_PageContentProductsExample_Fragment, CtfComponentFragment_Seo_Fragment } from '../ctf-component-fragment/ctf-component-fragment.query';
import { CtfComponentFragmentFragmentDoc } from '../ctf-component-fragment/ctf-component-fragment.query';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@libs/codegen/fetchConfig';
export type CtfPageFieldsFragment = (
  { __typename?: 'Page', internalName?: string | null, slug?: string | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null } | null, pageContent?: (
    { __typename?: 'PageContentAboutUsExample' }
    & CtfComponentFragment_PageContentAboutUsExample_Fragment
  ) | (
    { __typename?: 'PageContentHomeExample' }
    & CtfComponentFragment_PageContentHomeExample_Fragment
  ) | (
    { __typename?: 'PageContentProductDetailsExample' }
    & CtfComponentFragment_PageContentProductDetailsExample_Fragment
  ) | (
    { __typename?: 'PageContentProductsExample' }
    & CtfComponentFragment_PageContentProductsExample_Fragment
  ) | null }
  & CtfComponentFragment_Page_Fragment
);

export type CtfPageQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<(
      { __typename?: 'Page' }
      & CtfPageFieldsFragment
    ) | null> } | null };

export const CtfPageFieldsFragmentDoc = `
    fragment CtfPageFields on Page {
  ...CtfComponentFragment
  internalName
  slug
  seo {
    title
    description
  }
  pageContent {
    ...CtfComponentFragment
  }
}
    `;
export const CtfPageDocument = `
    query CtfPage($slug: String!, $locale: String) {
  pageCollection(where: {slug: $slug}, locale: $locale, limit: 1) {
    items {
      ...CtfPageFields
    }
  }
}
    ${CtfPageFieldsFragmentDoc}
${CtfComponentFragmentFragmentDoc}`;
export const useCtfPageQuery = <
      TData = CtfPageQuery,
      TError = unknown
    >(
      variables: CtfPageQueryVariables,
      options?: UseQueryOptions<CtfPageQuery, TError, TData>
    ) =>
    useQuery<CtfPageQuery, TError, TData>(
      ['CtfPage', variables],
      customFetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables),
      options
    );

useCtfPageQuery.getKey = (variables: CtfPageQueryVariables) => ['CtfPage', variables];
;

useCtfPageQuery.fetcher = (variables: CtfPageQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables, options);