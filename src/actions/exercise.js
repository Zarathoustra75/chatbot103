const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const exercises = ['En Extérieur', 'Chez Moi', 'En Salle']

import goalsType from './goals-type'

export default async function exercise(res) {
    console.log('EXERCISE')

    const men = res.getMemory('men')
    const women = res.getMemory('women')

    const bodySlim = res.getMemory('bodyslim')
    const bodyMaintain = res.getMemory('bodymaintain')
    const moreMuscle = res.getMemory('moremuscle')

    const replies = []

    if((men || women) && (bodySlim || moreMuscle || bodyMaintain)){

        const quickReplies = []
        exercises.forEach((l) => {
            quickReplies.push({
                name: l,
                value: `Je veux faire du sport ${l}`,
            })
        })
        replies.push(formatter.formatQuickReplies(quickReplies, res.reply()))

    }else{
        replies.push(formatter.formatMsg("Pas de précipitation !"))    
        
        let subreplies = await goalsType(res)
        subreplies.forEach((l) => {
            replies.push(l)
        })
    }

    return replies
}

