import { Resolvers } from '../../generated/types';
import { pullRequests } from '../consts/pullRequest';

export const pullRequestResolver: Resolvers = {
  Query: {
    async pullRequests() {
      return pullRequests;
    }
  },
};
