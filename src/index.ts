import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { pullRequests, persons, commits } from './consts';


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Person {
    id: String
    name: String
    age: Int
    email: String
    pullRequests: [PullRequest]!
  }

  type PullRequest {
    id: ID!
    title: String!
    description: String
    author: Person!
    createdAt: String!
    updatedAt: String
    status: PullRequestStatus!
    sourceBranch: String!
    destinationBranch: String!
    reviewers: [Person!]
    comments: [Comment!]
    commits: [Commit!]!
  }

  type Commit {
    id: ID!
    message: String!
    author: Person!
    timestamp: String!
    hash: String!
  }

  enum PullRequestStatus {
    OPEN
    CLOSED
    MERGED
  }

  type Comment {
    id: ID!
    author: Person!
    content: String!
    createdAt: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    persons: [Person]
    commits: [Commit]
    comments: [Comment]
    pullRequests: [PullRequest!]!
  }
`;

const resolvers = {
    Person : {
      async pullRequests(person){
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
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  export { server };
  console.log(`🚀  Server ready at: ${url}`);