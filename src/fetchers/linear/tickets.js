// LINEAR TICKETS
const {TASK_STATES} = require("../constants.js");
const dotenv = require("dotenv");
const {linearClient} = require("./shared.js");

dotenv.config()

const fetchLinearTickets = async (options) => {
    const res = await (await linearClient.viewer).assignedIssues()
    return res.nodes
}

const filterLinearTicket = (ticket) => {
    return !ticket.completedAt;
}


const processLinearTicket = (ticket) => {
    return {
        name: ticket.title,
        link: ticket.url,
        state: TASK_STATES.TODO,
        meta: {
            _object: ticket,
        }
    }
}

const getLinearTickets = async () => {
    const rawLinearTickets = await fetchLinearTickets()

    const tickets = rawLinearTickets.filter(filterLinearTicket).map(processLinearTicket)
    return tickets
}

module.exports = {
    getLinearTickets
}


