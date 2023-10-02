const {Octokit} = require("@octokit/core");
const dotenv = require("dotenv");

dotenv.config()

const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
})

module.exports = {
    octokit
}