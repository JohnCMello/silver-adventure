import * as Types from '../../../libs/graphql/graphql.types';

import { CtfComponentFragment_ComponentBase_Fragment, CtfComponentFragment_ComponentHeroBannerExample_Fragment, CtfComponentFragment_Page_Fragment, CtfComponentFragment_PageContentAboutUsExample_Fragment, CtfComponentFragment_PageContentBase_Fragment, CtfComponentFragment_PageContentHomeExample_Fragment, CtfComponentFragment_PageContentProductDetailsExample_Fragment, CtfComponentFragment_PageContentProductsExample_Fragment, CtfComponentFragment_Seo_Fragment } from '../../../libs/graphql/contenftul/ctf-component-fragment/ctf-component-fragment.query';
import { CtfComponentFragmentFragmentDoc } from '../../../libs/graphql/contenftul/ctf-component-fragment/ctf-component-fragment.query';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@libs/codegen/fetchConfig';
export type CtfPageContentProductDetailsExampleQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CtfPageContentProductDetailsExampleQuery = { __typename?: 'Query', pageContentProductDetailsExample?: (
    { __typename?: 'PageContentProductDetailsExample', internalName?: string | null, heroBanner?: (
      { __typename?: 'ComponentHeroBannerExample' }
      & CtfComponentFragment_ComponentHeroBannerExample_Fragment
    ) | null }
    & CtfComponentFragment_PageContentProductDetailsExample_Fragment
  ) | null };


export const CtfPageContentProductDetailsExampleDocument = `
    query ctfPageContentProductDetailsExample($id: String!, $locale: String) {
  pageContentProductDetailsExample(id: $id, locale: $locale) {
    ...CtfComponentFragment
    internalName
    heroBanner {
      ...CtfComponentFragment
    }
  }
}
    ${CtfComponentFragmentFragmentDoc}`;
export const useCtfPageContentProductDetailsExampleQuery = <
      TData = CtfPageContentProductDetailsExampleQuery,
      TError = unknown
    >(
      variables: CtfPageContentProductDetailsExampleQueryVariables,
      options?: UseQueryOptions<CtfPageContentProductDetailsExampleQuery, TError, TData>
    ) =>
    useQuery<CtfPageContentProductDetailsExampleQuery, TError, TData>(
      ['ctfPageContentProductDetailsExample', variables],
      customFetcher<CtfPageContentProductDetailsExampleQuery, CtfPageContentProductDetailsExampleQueryVariables>(CtfPageContentProductDetailsExampleDocument, variables),
      options
    );

useCtfPageContentProductDetailsExampleQuery.getKey = (variables: CtfPageContentProductDetailsExampleQueryVariables) => ['ctfPageContentProductDetailsExample', variables];
;

useCtfPageContentProductDetailsExampleQuery.fetcher = (variables: CtfPageContentProductDetailsExampleQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPageContentProductDetailsExampleQuery, CtfPageContentProductDetailsExampleQueryVariables>(CtfPageContentProductDetailsExampleDocument, variables, options);