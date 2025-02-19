import { gql } from "@apollo/client";
import {server} from "../src/index";

it("Test Person model", async () => {
  const result = await server.executeOperation({
    query: gql`
      query PersonQuery {
        persons {
          id
          age
          name
          pullRequests {
            id
            title
            description
            commits {
              message
              hash
            }
          }
          email
        }
      }
    `,
  });
  expect(result).not.toBeNull();
});