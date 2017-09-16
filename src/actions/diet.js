const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const repas = ['Petit dejeuner', 'Dejeuner', 'Gouter', 'Diner']

export default async function diet(res) {
    console.log('DIET')

    const replies = []
    const quickReplies = []
    repas.forEach((l) => {
        quickReplies.push({
            name: l,
            value: `Je voudrais manger au ${l}`,
        })
    })
    replies.push(formatter.formatQuickReplies(quickReplies, res.reply()))
    return replies
}



