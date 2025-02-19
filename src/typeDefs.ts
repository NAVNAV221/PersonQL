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
    personByName(name: String!): Person
  }
`;
