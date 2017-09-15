const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
let replies = []

export default async function exerciseType(res, payload) {
    console.log('GOAL TYPE')

    replies = []
    const goal = [
        "C'est parti 💪 Que souhaites tu comme information ? Veux tu des exemples de repas ou plutôt des exercices",
    ]
    replies.push(formatter.formatMsg(goal[0]))

    return replies
}

