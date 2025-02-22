import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { readFileSync } from 'node:fs'

import { resolvers } from './resolvers.js';
const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf8')

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