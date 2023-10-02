// GITHUB PRs (WITHOUT ISSUES)

const {octokit} = require("./shared.js");
const {GET_GITHUB_ONGOING_PRS_WITHOUT_ISSUES} = require("./gql.js");
const {TASK_STATES} = require("../constants.js");

const fetchPullRequestsWithoutIssues = async (options) => {
    const res = await octokit.graphql({
        query: GET_GITHUB_ONGOING_PRS_WITHOUT_ISSUES,
        ...options,
    })
    return res.viewer.pullRequests.nodes
}

const filterPullRequestWithoutIssue = (pullRequest) => {
    return !pullRequest.closingIssuesReferences.nodes
}


const processPullRequestWithoutIssue = (pullRequest) => {
    return {
        name: pullRequest.title,
        link: pullRequest.permalink,
        state: TASK_STATES.TODO,
        meta: {
            _object: pullRequest,
        }
    }
}

const getPullRequestsWithoutIssues = async (numPullRequests = 5) => {
    const rawPullRequests = await fetchPullRequestsWithoutIssues({
        numPullRequestsRetrieved: numPullRequests,
    })

    const pullRequests = rawPullRequests.filter(filterPullRequestWithoutIssue).map(processPullRequestWithoutIssue)
    return pullRequests
}

module.exports = {
    getPullRequestsWithoutIssues
}


