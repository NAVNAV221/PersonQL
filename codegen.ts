import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  generates: {
    './src/generated/types.ts': {
      schema: ['src/graphql/typeDefs/person.graphql','src/graphql/typeDefs/pullRequest.graphql'],
      config: {
        useIndexSignature: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;