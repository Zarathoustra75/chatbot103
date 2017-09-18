const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function goalsType(res) {
    console.log('GOAL TYPE')

    removeAbsentEntitiesFromMemory(res)

    const men = res.getMemory('men')
    const women = res.getMemory('women')
    const bodySlim = res.getMemory('bodyslim')
    const bodyMaintain = res.getMemory('bodymaintain')
    const moreMuscle = res.getMemory('moremuscle')

    const replies = []
    let response = ""

    if(!men && !women){
      response = "J'ai besoin de savoir si tu es un homme ou une femme."
    }else if(!bodySlim && !bodyMaintain && !moreMuscle){
      response = "Veux tu gagner en masse, perdre du poids, ou simplement rester en forme ? :)"
    }else{
      response = "J'ai toutes les informations qu'il me faut ! Veux-tu faire de l'exercice ? Ou préfères-tu une idée de recette ?"
    }

    replies.push(formatter.formatMsg(response))

    return replies
}

function removeAbsentEntitiesFromMemory(res){

  let memory= {}

  if(res.entities["body-slim"]){
    memory.moremuscle = null
    memory.bodymaintain = null
  }else if(res.entities["body-maintain"]) {
    memory.bodyslim = null
    memory.moremuscle = null
  }else if(res.entities["more-muscle"]) {
    memory.bodyslim = null
    memory.bodymaintain = null
  }

  if(res.entities["men"]) {
    memory.women = null
  }else if(res.entities["women"]) {
    memory.men = null
  }

  if(Object.keys(memory).length > 0){

    agent
    .put('https://api.recast.ai/v2/converse')
    .send({
      conversation_token: res.conversationToken,
      memory: memory
    })
    .set('Authorization', 'Token ' + process.env.REQUEST_TOKEN)
    .end(function(err, res) {
      console.log(res);
    })

  }

}