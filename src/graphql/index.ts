import {readFileSync} from "fs";
import path from "path";
import {personsResolver} from "./resolvers/person.resolver";
import {pullRequestResolver} from "./resolvers/pullRequest.resolver";
import { Resolvers } from '../generated/types';


const personTypes = readFileSync(path.join(__dirname, "./typeDefs/person.graphql"), {
    encoding: "utf-8",
});
  
const pullRequestsTypes = readFileSync(path.join(__dirname, "./typeDefs/pullRequest.graphql"), {
    encoding: "utf-8",
});
  
export const typeDefs = `
    ${personTypes}
    ${pullRequestsTypes}
`;

export const resolvers: Resolvers = {
    Query: {
      ...personsResolver.Query,
      ...pullRequestResolver.Query,
    },
  };  

  