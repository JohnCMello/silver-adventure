export const fetchConfig = {
  endpoint: `https://graphql.contentful.com/content/v1/spaces/${String(process.env.CONTENTFUL_SPACE_ID)}`,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
}

export function customFetcher<TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
) {
  return async (): Promise<TData> => {
    const res = await fetch(fetchConfig.endpoint as string, {
      method: 'POST',
      ...options,
      ...fetchConfig.params,
      body: JSON.stringify({ query, variables }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}

export type CustomFetcher<TData, TVariables> = typeof customFetcher<TData, TVariables>
