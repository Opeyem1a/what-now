const {getIssuesAssignedToMe} = require("./fetchers/github/issuesAssignedToMe.js");
const {getPullRequestsWithoutIssues} = require("./fetchers/github/pullRequestsWithoutIssues");
const {getLinearTickets} = require("./fetchers/linear/tickets");

// getIssuesAssignedToMe().then(out => {
//     console.log(out)
// })

// getPullRequestsWithoutIssues().then(out => {
//     console.log(out)
// })

getLinearTickets().then(out => {
    console.log(out)
})


