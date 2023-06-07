import { CodegenConfig } from '@graphql-codegen/cli'

import { fetchConfig } from './fetchConfig'

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [fetchConfig.endpoint]: fetchConfig.params,
    },
  ],
  generates: {
    './src/libs/graphql/graphql.schema.json': {
      plugins: ['introspection'],
    },
    './src/libs/graphql/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    './src/libs/graphql/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./src/**/*.graphql'],
    },
    './src/': {
      documents: ['./src/**/*.graphql'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.query.ts',
        baseTypesPath: 'libs/graphql/graphql.types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-query'],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        withHooks: true,
        fetcher: '@libs/codegen/fetchConfig#customFetcher',
      },
    },
  },
}

export default config
