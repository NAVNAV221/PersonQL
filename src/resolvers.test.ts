import { graphqlTestCall } from "./graphqlTestCall.js";
import { describe, expect, it } from '@jest/globals'

const getUserQuery = `
query {
  personById(id: "12345678") {
    id
    name
    age
    email
  }
}
`;

describe("resolvers", () => {
  it("Test Person model", async () => {
    const testUser = {
      id: '12345678',
      name: 'Nave',
      age: 22,
      email: 'Nave@nafoo.ai'
    };

    const meResponse = await graphqlTestCall(getUserQuery, { name: testUser.name });

    expect(meResponse).toEqual({
      data: {
        personById: {
          id: "12345678",
          name: "Nave",
          age: 22,
          email: "Nave@nafoo.ai"
        }
      }
    });
  });
});