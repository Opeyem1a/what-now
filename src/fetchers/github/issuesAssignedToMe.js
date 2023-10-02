// GITHUB ISSUES
const {octokit} = require("./shared.js");
const {GET_GITHUB_ISSUES} = require("./gql.js");
const {TASK_STATES} = require("../constants.js");
const dotenv = require("dotenv");

dotenv.config()

const fetchIssuesAssignedToMe = async (options) => {
    const res = await octokit.graphql({
        query: GET_GITHUB_ISSUES,
        ...options,
    })
    return res.viewer.issues.nodes
}

const filterIssueAssignedToMe = (issue) => {
    // check if issue is assigned to oneself
    return issue.assignees.nodes.some(assignee => assignee.login.toLowerCase() === process.env.GITHUB_USERNAME.toLowerCase());
}


const processIssueAssignedToMe = (issue) => {
    return {
        name: issue.title,
        link: issue.url,
        state: TASK_STATES.TODO,
        meta: {
            _object: issue,
        }
    }
}

const getIssuesAssignedToMe = async (numIssues = 5) => {
    const rawIssues = await fetchIssuesAssignedToMe({
        numIssuesRetrieved: numIssues,
    })

    const issues = rawIssues.filter(filterIssueAssignedToMe).map(processIssueAssignedToMe)
    return issues
}

module.exports = {
    getIssuesAssignedToMe
}


