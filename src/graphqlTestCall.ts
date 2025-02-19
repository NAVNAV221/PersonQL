import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const graphqlTestCall = async (
  query: any,
  variables?: any,
) => {
  return graphql({
    schema,
    source: query,
    variableValues: variables
});
};