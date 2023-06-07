import * as Types from '../../../libs/graphql/graphql.types';

import { CtfComponentFragment_ComponentBase_Fragment, CtfComponentFragment_ComponentHeroBannerExample_Fragment, CtfComponentFragment_Page_Fragment, CtfComponentFragment_PageContentAboutUsExample_Fragment, CtfComponentFragment_PageContentBase_Fragment, CtfComponentFragment_PageContentHomeExample_Fragment, CtfComponentFragment_PageContentProductDetailsExample_Fragment, CtfComponentFragment_PageContentProductsExample_Fragment, CtfComponentFragment_Seo_Fragment } from '../../../libs/graphql/contenftul/ctf-component-fragment/ctf-component-fragment.query';
import { CtfComponentFragmentFragmentDoc } from '../../../libs/graphql/contenftul/ctf-component-fragment/ctf-component-fragment.query';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@libs/codegen/fetchConfig';
export type CtfPageContentAboutUsExampleQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CtfPageContentAboutUsExampleQuery = { __typename?: 'Query', pageContentAboutUsExample?: (
    { __typename?: 'PageContentAboutUsExample', internalName?: string | null, heroBanner?: (
      { __typename?: 'ComponentHeroBannerExample' }
      & CtfComponentFragment_ComponentHeroBannerExample_Fragment
    ) | null }
    & CtfComponentFragment_PageContentAboutUsExample_Fragment
  ) | null };


export const CtfPageContentAboutUsExampleDocument = `
    query ctfPageContentAboutUsExample($id: String!, $locale: String) {
  pageContentAboutUsExample(id: $id, locale: $locale) {
    ...CtfComponentFragment
    internalName
    heroBanner {
      ...CtfComponentFragment
    }
  }
}
    ${CtfComponentFragmentFragmentDoc}`;
export const useCtfPageContentAboutUsExampleQuery = <
      TData = CtfPageContentAboutUsExampleQuery,
      TError = unknown
    >(
      variables: CtfPageContentAboutUsExampleQueryVariables,
      options?: UseQueryOptions<CtfPageContentAboutUsExampleQuery, TError, TData>
    ) =>
    useQuery<CtfPageContentAboutUsExampleQuery, TError, TData>(
      ['ctfPageContentAboutUsExample', variables],
      customFetcher<CtfPageContentAboutUsExampleQuery, CtfPageContentAboutUsExampleQueryVariables>(CtfPageContentAboutUsExampleDocument, variables),
      options
    );

useCtfPageContentAboutUsExampleQuery.getKey = (variables: CtfPageContentAboutUsExampleQueryVariables) => ['ctfPageContentAboutUsExample', variables];
;

useCtfPageContentAboutUsExampleQuery.fetcher = (variables: CtfPageContentAboutUsExampleQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPageContentAboutUsExampleQuery, CtfPageContentAboutUsExampleQueryVariables>(CtfPageContentAboutUsExampleDocument, variables, options);