import { QueryCache, QueryClientConfig } from '@tanstack/react-query'
import Router from 'next/router'

export const queryConfig: QueryClientConfig = {
  queryCache: new QueryCache({
    onError: () => {
      Router.push({ pathname: '/404' })
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
}
