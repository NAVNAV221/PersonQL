import { Resolvers } from '../../generated/types';
import { persons } from '../consts/person';

export const personsResolver: Resolvers = {
  Query: {
    persons() {
      return persons;
    },
    person: (_, { id }) => {
      return persons.find((person) => person.id === id) || null;
    },
  },
};
