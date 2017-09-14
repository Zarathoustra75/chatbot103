
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const gender = ['Homme', 'Femme']
let replies = []


export default async function yes(res, payload) {
    console.log('GET STARTED')

    replies = []
    const started = [
        "J'aimerai te poser deux petites questions avant de commencer !",

    ]
    replies.push(formatter.formatMsg(started[0]))

    replies = []
    const quickReplies = []
    gender.forEach((l) => {
        quickReplies.push({
            name: l,
            value: `${l}`,
        })
    })
    replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
    return replies
}