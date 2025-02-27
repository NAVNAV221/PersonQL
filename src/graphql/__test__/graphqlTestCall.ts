import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from '../index';
import { typeDefs } from "../index";

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