
export const persons = [
    {
        id: '12345678',
        name: 'Nave',
        age: 22,
        email: 'Nave@nafoo.ai',
    },
    {
        id: '12345679',
        name: 'Dror',
        age: 30,
        email: 'Dror@naboo.ai',
    },
];
export const commits = [
    {
        id: "123123123",
        message: "There is a typo in foo",
        author: persons[0],
        timestamp: Date.now().toString(),
        hash: "b0c10d07-0053-44c3-b7a6-ce8265e36d4c"
    },
    {
        id: "222223123123",
        message: "Solve TODOs",
        author: persons[1],
        timestamp: Date.now().toString(),
        hash: "CCC10d07-1153-44c3-b7a6-ce8265e36d4c"
    }
];
export const pullRequests = [
    {
        id: "PR-001",
        title: "Fix typos in foo module",
        description: "This PR fixes a typo in the foo module's documentation.",
        author: persons[0],
        createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
        updatedAt: new Date(Date.now() - 1000 * 30).toISOString(), // 30 seconds ago
        status: "OPEN",
        sourceBranch: "fix-typos",
        destinationBranch: "main",
        reviewers: [persons[1]], // Dror is reviewing Nave's PR
        comments: [
            {
                id: "CMT-001",
                author: persons[1],
                content: "Looks good! Just double-check the function name.",
                createdAt: new Date(Date.now() - 1000 * 50).toISOString(), // 50 seconds ago
            }
        ],
        commits: [commits[0]]
    },
    {
        id: "PR-002",
        title: "Resolve pending TODOs",
        description: "Refactored code and resolved all pending TODOs in the project.",
        author: persons[1],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        updatedAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(), // 10 minutes ago
        status: "OPEN",
        sourceBranch: "refactor-todos",
        destinationBranch: "main",
        reviewers: [persons[0]], // Nave is reviewing Dror's PR
        comments: [
            {
                id: "CMT-002",
                author: persons[0],
                content: "Great job! Just check line 42 in utils.js.",
                createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
            }
        ],
        commits: [commits[1]]
    }
];
