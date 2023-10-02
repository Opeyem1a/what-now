const TASK_STATES = {
    TODO: "TODO",
    IN_PROGRESS: "IN_PROGRESS",
    STALLED: "STALLED",
    READY: "READY",
}

const SOURCE = {
    LINEAR: "LINEAR",
    GITHUB: "GITHUB",
    TRELLO: "TRELLO",
}

/*
Schema for a "task"

{
    name: string,
    link: string,
    state: TASK_STATES,
    meta: Object,
}

 */

module.exports = {
    TASK_STATES,
    SOURCE
}
