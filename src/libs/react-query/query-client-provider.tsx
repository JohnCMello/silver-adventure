import {
  DehydratedState,
  QueryClientProvider as ReactQueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type QueryClientProviderProps = {
  children: React.ReactNode
  client: QueryClient
  dehydratedState: DehydratedState
}
export function QueryClientProvider(props: QueryClientProviderProps) {
  const { children, dehydratedState, client } = props

  return (
    <ReactQueryClientProvider client={client}>
      <Hydrate state={dehydratedState}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </Hydrate>
    </ReactQueryClientProvider>
  )
}
