import * as Types from '../../../libs/graphql/graphql.types';

import { CtfComponentFragment_ComponentBase_Fragment, CtfComponentFragment_ComponentHeroBannerExample_Fragment, CtfComponentFragment_Page_Fragment, CtfComponentFragment_PageContentAboutUsExample_Fragment, CtfComponentFragment_PageContentBase_Fragment, CtfComponentFragment_PageContentHomeExample_Fragment, CtfComponentFragment_PageContentProductDetailsExample_Fragment, CtfComponentFragment_PageContentProductsExample_Fragment, CtfComponentFragment_Seo_Fragment } from '../../../libs/graphql/contenftul/ctf-component-fragment/ctf-component-fragment.query';
import { CtfComponentFragmentFragmentDoc } from '../../../libs/graphql/contenftul/ctf-component-fragment/ctf-component-fragment.query';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@libs/codegen/fetchConfig';
export type CtfPageContentHomeExampleQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CtfPageContentHomeExampleQuery = { __typename?: 'Query', pageContentHomeExample?: (
    { __typename?: 'PageContentHomeExample', internalName?: string | null, componentsCollection?: { __typename?: 'PageContentHomeExampleComponentsCollection', items: Array<(
        { __typename?: 'ComponentHeroBannerExample' }
        & CtfComponentFragment_ComponentHeroBannerExample_Fragment
      ) | null> } | null }
    & CtfComponentFragment_PageContentHomeExample_Fragment
  ) | null };


export const CtfPageContentHomeExampleDocument = `
    query ctfPageContentHomeExample($id: String!, $locale: String) {
  pageContentHomeExample(id: $id, locale: $locale) {
    ...CtfComponentFragment
    internalName
    componentsCollection {
      items {
        ...CtfComponentFragment
      }
    }
  }
}
    ${CtfComponentFragmentFragmentDoc}`;
export const useCtfPageContentHomeExampleQuery = <
      TData = CtfPageContentHomeExampleQuery,
      TError = unknown
    >(
      variables: CtfPageContentHomeExampleQueryVariables,
      options?: UseQueryOptions<CtfPageContentHomeExampleQuery, TError, TData>
    ) =>
    useQuery<CtfPageContentHomeExampleQuery, TError, TData>(
      ['ctfPageContentHomeExample', variables],
      customFetcher<CtfPageContentHomeExampleQuery, CtfPageContentHomeExampleQueryVariables>(CtfPageContentHomeExampleDocument, variables),
      options
    );

useCtfPageContentHomeExampleQuery.getKey = (variables: CtfPageContentHomeExampleQueryVariables) => ['ctfPageContentHomeExample', variables];
;

useCtfPageContentHomeExampleQuery.fetcher = (variables: CtfPageContentHomeExampleQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPageContentHomeExampleQuery, CtfPageContentHomeExampleQueryVariables>(CtfPageContentHomeExampleDocument, variables, options);