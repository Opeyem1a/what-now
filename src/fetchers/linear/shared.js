const {LinearClient} = require("@linear/sdk");
const dotenv = require("dotenv");

dotenv.config()

const linearClient = new LinearClient({ apiKey: process.env.LINEAR_PERSONAL_API_KEY });

module.exports = {
    linearClient
}