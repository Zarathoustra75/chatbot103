const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const exercises = ['Exterieur', 'Chez moi', 'Salle']

export default async function exercise(res) {
  console.log('EXERCISE')

  const replies = []
  const quickReplies = []
  exercises.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `Je veux faire du sport en ${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies,res.reply()))
  return replies
}

