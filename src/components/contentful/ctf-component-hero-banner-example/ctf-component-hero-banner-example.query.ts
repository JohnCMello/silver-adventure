import * as Types from '../../../libs/graphql/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@libs/codegen/fetchConfig';
export type CtfComponentHeroBannerExampleQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CtfComponentHeroBannerExampleQuery = { __typename?: 'Query', componentHeroBannerExample?: { __typename?: 'ComponentHeroBannerExample', title?: string | null, backgroundImage?: { __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null };


export const CtfComponentHeroBannerExampleDocument = `
    query ctfComponentHeroBannerExample($id: String!, $locale: String) {
  componentHeroBannerExample(id: $id, locale: $locale) {
    title
    backgroundImage {
      title
      description
      url
      width
      height
    }
  }
}
    `;
export const useCtfComponentHeroBannerExampleQuery = <
      TData = CtfComponentHeroBannerExampleQuery,
      TError = unknown
    >(
      variables: CtfComponentHeroBannerExampleQueryVariables,
      options?: UseQueryOptions<CtfComponentHeroBannerExampleQuery, TError, TData>
    ) =>
    useQuery<CtfComponentHeroBannerExampleQuery, TError, TData>(
      ['ctfComponentHeroBannerExample', variables],
      customFetcher<CtfComponentHeroBannerExampleQuery, CtfComponentHeroBannerExampleQueryVariables>(CtfComponentHeroBannerExampleDocument, variables),
      options
    );

useCtfComponentHeroBannerExampleQuery.getKey = (variables: CtfComponentHeroBannerExampleQueryVariables) => ['ctfComponentHeroBannerExample', variables];
;

useCtfComponentHeroBannerExampleQuery.fetcher = (variables: CtfComponentHeroBannerExampleQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfComponentHeroBannerExampleQuery, CtfComponentHeroBannerExampleQueryVariables>(CtfComponentHeroBannerExampleDocument, variables, options);