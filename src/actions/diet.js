const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const repas = ['Petit Déjeuner', 'Déjeuner', 'Encas', 'Dîner']

export default async function diet(res) {
    console.log('DIET')

    const men = res.getMemory('men')
    const women = res.getMemory('women')

    const bodySlim = res.getMemory('bodyslim')
    const bodyMaintain = res.getMemory('bodymaintain')
    const moreMuscle = res.getMemory('moremuscle')

    const replies = []

    if((men || women) && (bodySlim || moreMuscle || bodyMaintain)){

        const quickReplies = []
        repas.forEach((l) => {
            quickReplies.push({
                name: l,
                value: `Je voudrais une recette pour un ${l}`,
            })
        })
        replies.push(formatter.formatQuickReplies(quickReplies, res.reply()))

    }else{
        replies.push(formatter.formatMsg("Pas de précipitation !"))    
        replies.push(formatter.formatMsg(res.reply()))
    }

    return replies
}



