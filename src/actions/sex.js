const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const training = ['Perdre du poids', 'Prendre du poids', 'Me maintenir en forme']

export default async function exerciseType(res, payload) {
    console.log('EXERCISE TYPE')

    const men = res.getMemory('men')
    const women = res.getMemory('women')

    let replies = []
    const started = [
        "Merci, j'aimerai connaitre l'objectif de ton entrainement",

    ]
    replies.push(formatter.formatMsg(started[0]))

    replies = []
    const quickReplies = []
    training.forEach((t) => {
        quickReplies.push({
            name: t,
            value: `${t}`,
        })
    })
    replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))

    return replies
}

