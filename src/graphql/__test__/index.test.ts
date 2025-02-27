import {ApolloServer} from "@apollo/server";
import { typeDefs, resolvers } from "../index";
import { Person } from "../../generated/types";

const personQueryById = `
query ExampleQuery($personId: ID!) {
  person(id: $personId) {
    id
    name
    age
    email
  }
}`

const expectedResult = {
  "person": {
    "id": "12345678",
    "name": "Nave",
    "age": 22,
    "email": "Nave@nafoo.ai"
  }
}

it('returns hello with the provided name', async () => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  const result = await testServer.executeOperation({
    query: personQueryById,
    variables: { personId: '12345678' },
  });

  expect(result).toBeDefined();
  expect(result.body.kind).toBe('single');

  if (result.body.kind === "single") {
    expect(result.body.singleResult.errors).toBeUndefined();
    expect(result.body.singleResult.data).toEqual(expectedResult);
  }
  
});