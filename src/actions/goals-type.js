const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function exerciseType(res, payload) {
    console.log('GOAL TYPE')

    const replies = []

    let memory = {}

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

    removeFromMemory({
      conversation_token: res.conversationToken,
      memory: memory
    })


    replies.push(formatter.formatMsg(res.reply()))

    return replies
}

function removeFromMemory(data){

    agent
    .put('https://api.recast.ai/v2/converse')
    .send(data)
    .set('Authorization', 'Token ' + process.env.REQUEST_TOKEN)
    .end(function(err, res) {
      console.log(res);
    })

}