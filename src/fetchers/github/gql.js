const GET_GITHUB_ISSUES = `
    query assignedIssues($numIssuesRetrieved: Int = 50, $numLabelsPerIssue: Int = 5) {
        viewer {
            issues(
                first:$numIssuesRetrieved,
                filterBy: {
                    states: [OPEN]
                }
                orderBy: {
                    direction: DESC,
                    field: UPDATED_AT
                }
            ) {
                nodes {
                    id
                    assignees(first: 5) {
                        nodes {
                            id
                            name
                            login
                        }
                    }
                    closed
                    closedAt
                    labels(first: $numLabelsPerIssue) {
                        nodes {
                            id
                        }
                    }
                    linkedBranches(first: 1) {
                        nodes {
                            id
                        }
                    }
                    number
                    repository {
                        id
                        name
                    }
                    title
                    url
                }
            }
        }
    }
`

const GET_GITHUB_ONGOING_PRS_WITHOUT_ISSUES = `
    query ongoingPullRequests($numPullRequestsRetrieved: Int = 50, $numLabelsPerPull: Int = 5) {
        viewer {
            pullRequests(
                first: $numPullRequestsRetrieved,
                states: [OPEN]
                orderBy: {
                    direction: DESC,
                    field: UPDATED_AT
                }
            ) {
                nodes {
                    id
                    bodyText
                    closed
                    closedAt
                    closingIssuesReferences(first: 10) {
                        nodes {
                            id
                            number
                        }
                    }
                    isDraft
                    labels(first: $numLabelsPerPull) {
                        nodes {
                            id
                            name
                        }
                    }
                    mergeable
                    merged
                    number
                    participants(first: 5) {
                        nodes {
                            id
                        }
                    }
                    permalink
                    repository {
                        id
                        name
                    }
                    reviewDecision
                    state
                    title
                    updatedAt
                }
            }
        }
    }
`

module.exports = {
    GET_GITHUB_ISSUES,
    GET_GITHUB_ONGOING_PRS_WITHOUT_ISSUES,
}