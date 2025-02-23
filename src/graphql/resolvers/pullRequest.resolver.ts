import { PullRequestResolvers } from '../../generated/types';
import { pullRequests } from '../consts/pullRequest';

export const pullRequestResolver: PullRequestResolvers = {
  Query: {
    async pullRequests() {
      return pullRequests;
    }
  },
};
