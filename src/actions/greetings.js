const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function greetings(res, payload) {
    console.log('GREETINGS')

    let replies = []
    let data = await agent('GET', 'https://graph.facebook.com/v2.6/' + res.conversationToken + '/')
        .query({fields: 'first_name', access_token: process.env.FBGRAPH_TOKEN})

    data = JSON.parse(data.text)

    let first_name = data["first_name"]

    const greetings = [
        `Bonjour ${first_name} !`,
        `Salut ${first_name} !`,
        `Hey ${first_name}  ;)`,
        `Yo ${first_name}  ;)`,
    ]

    replies.push(formatter.formatMsg(greetings[Math.floor(Math.random() * greetings.length)]))
    return replies

}