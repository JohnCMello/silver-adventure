import * as Types from '../../graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@libs/codegen/fetchConfig';
export type AppRoutesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AppRoutesQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null, en?: string | null } | null> } | null };


export const AppRoutesDocument = `
    query appRoutes {
  pageCollection {
    items {
      ... on Page {
        slug(locale: "pt-BR")
        en: slug(locale: "en")
      }
    }
  }
}
    `;
export const useAppRoutesQuery = <
      TData = AppRoutesQuery,
      TError = unknown
    >(
      variables?: AppRoutesQueryVariables,
      options?: UseQueryOptions<AppRoutesQuery, TError, TData>
    ) =>
    useQuery<AppRoutesQuery, TError, TData>(
      variables === undefined ? ['appRoutes'] : ['appRoutes', variables],
      customFetcher<AppRoutesQuery, AppRoutesQueryVariables>(AppRoutesDocument, variables),
      options
    );

useAppRoutesQuery.getKey = (variables?: AppRoutesQueryVariables) => variables === undefined ? ['appRoutes'] : ['appRoutes', variables];
;

useAppRoutesQuery.fetcher = (variables?: AppRoutesQueryVariables, options?: RequestInit['headers']) => customFetcher<AppRoutesQuery, AppRoutesQueryVariables>(AppRoutesDocument, variables, options);