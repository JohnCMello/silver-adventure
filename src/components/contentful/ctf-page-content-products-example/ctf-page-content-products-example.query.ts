import * as Types from '../../../libs/graphql/graphql.types';

import { CtfComponentFragment_ComponentBase_Fragment, CtfComponentFragment_ComponentHeroBannerExample_Fragment, CtfComponentFragment_Page_Fragment, CtfComponentFragment_PageContentAboutUsExample_Fragment, CtfComponentFragment_PageContentBase_Fragment, CtfComponentFragment_PageContentHomeExample_Fragment, CtfComponentFragment_PageContentProductDetailsExample_Fragment, CtfComponentFragment_PageContentProductsExample_Fragment, CtfComponentFragment_Seo_Fragment } from '../../../libs/graphql/contenftul/ctf-component-fragment/ctf-component-fragment.query';
import { CtfComponentFragmentFragmentDoc } from '../../../libs/graphql/contenftul/ctf-component-fragment/ctf-component-fragment.query';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@libs/codegen/fetchConfig';
export type CtfPageContentProductsExampleQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CtfPageContentProductsExampleQuery = { __typename?: 'Query', pageContentProductsExample?: (
    { __typename?: 'PageContentProductsExample', internalName?: string | null, heroBanner?: (
      { __typename?: 'ComponentHeroBannerExample' }
      & CtfComponentFragment_ComponentHeroBannerExample_Fragment
    ) | null }
    & CtfComponentFragment_PageContentProductsExample_Fragment
  ) | null };


export const CtfPageContentProductsExampleDocument = `
    query ctfPageContentProductsExample($id: String!, $locale: String) {
  pageContentProductsExample(id: $id, locale: $locale) {
    ...CtfComponentFragment
    internalName
    heroBanner {
      ...CtfComponentFragment
    }
  }
}
    ${CtfComponentFragmentFragmentDoc}`;
export const useCtfPageContentProductsExampleQuery = <
      TData = CtfPageContentProductsExampleQuery,
      TError = unknown
    >(
      variables: CtfPageContentProductsExampleQueryVariables,
      options?: UseQueryOptions<CtfPageContentProductsExampleQuery, TError, TData>
    ) =>
    useQuery<CtfPageContentProductsExampleQuery, TError, TData>(
      ['ctfPageContentProductsExample', variables],
      customFetcher<CtfPageContentProductsExampleQuery, CtfPageContentProductsExampleQueryVariables>(CtfPageContentProductsExampleDocument, variables),
      options
    );

useCtfPageContentProductsExampleQuery.getKey = (variables: CtfPageContentProductsExampleQueryVariables) => ['ctfPageContentProductsExample', variables];
;

useCtfPageContentProductsExampleQuery.fetcher = (variables: CtfPageContentProductsExampleQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPageContentProductsExampleQuery, CtfPageContentProductsExampleQueryVariables>(CtfPageContentProductsExampleDocument, variables, options);