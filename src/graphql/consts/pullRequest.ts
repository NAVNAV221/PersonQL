import { persons } from "./person";
import { PullRequest, PullRequestStatus } from "../../generated/types";

export const pullRequests: PullRequest[]  = [
    {
        id: "PR-001",
        title: "Fix typos in foo module",
        description: "This PR fixes a typo in the foo module's documentation.",
        author: persons[0],
        createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
        updatedAt: new Date(Date.now() - 1000 * 30).toISOString(), // 30 seconds ago
        status: PullRequestStatus.Open,
        sourceBranch: "fix-typos",
        destinationBranch: "main",
        reviewers: [persons[1]], // Dror is reviewing Nave's PR
    },
    {
        id: "PR-002",
        title: "Resolve pending TODOs",
        description: "Refactored code and resolved all pending TODOs in the project.",
        author: persons[1],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(), // 10 minutes ago
        status: PullRequestStatus.Closed,
        sourceBranch: "refactor-todos",
        destinationBranch: "main",
        reviewers: [persons[0]], // Nave is reviewing Dror's PR
    }
];