const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function greetings(res, payload) {
    console.log('GREETINGS')

    const replies = []
    const greetings = [
        'Bonjour',
        'Salut !',
        'Hey ;)',
    ]
    replies.push(formatter.formatMsg(greetings[Math.floor(Math.random() * greetings.length)]))
    return replies
}