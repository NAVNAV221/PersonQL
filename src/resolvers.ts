import { Resolvers } from './generated/graphql.js';
import { persons } from './consts.js';

export const resolvers: Resolvers = {
  Query: {
    persons() {
      return persons;
    },
    personById: (_, { id }) => {
      return persons.find((person) => person.id === id) ?? persons[0];
    }
  }
}
