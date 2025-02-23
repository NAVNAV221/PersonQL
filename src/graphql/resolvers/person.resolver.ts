import { PersonResolvers } from '../../generated/types';
import { persons } from '../consts/person';

export const personsResolver: PersonResolvers = {
  Query: {
    async persons(_: any,) {
      return persons;
    },
    async person(_: any, args: Record<string, any>) {
      return persons.find((person) => person.id === args.id);
    },
  },
};
