import { pullRequests, persons, commits } from './consts.js';
import { findPersonByName } from './utils/personUtils.js';

type Person = typeof persons[0];

export const resolvers = {
  Person: {
    async pullRequests(person: Person) {
      try {
        if (!person || !person.name) {
          console.error("Invalid person object or missing name");
          return [];
        }
        const personName = person.name.trim().toLowerCase();

        const personPullRequests = pullRequests.filter(pullRequest => {
          const authorName = (pullRequest.author?.name || "").trim().toLowerCase();
          return authorName === personName;
        });

        console.log(`Found ${personPullRequests.length} pull requests for ${person.name}`);
        return personPullRequests;
      } catch (error) {
        console.error("Error in resolving pull requests:", error);
        return [];
      }
    }
  },
  Query: {
    persons: () => persons,
    commits: () => commits,
    pullRequests: () => pullRequests,
    personByName: (_: any, { name }: { name: string }) => findPersonByName(name)
  },
};
