const actions = {
    'goals-type': require('./goals-type'),
    'exercise': require('./exercise'),
    'exercise-type': require('./exercise-type'),
    'diet': require('./diet'),
    'diet-type': require('./diet-type'),
    'greetings': require('./greetings'),
    'laugh': require('./laugh'),
}


export default async function handleAction(res, payload) {
    const currentAction = res.action && res.action.slug
    console.log(currentAction)

    let replies = []
    if (actions[currentAction]) {
        console.log('Enter action')
        replies = await actions[currentAction].default(res, payload)
    } else if (res.reply()) {
        replies.push({
            type: 'text',
            content: res.reply(),
        })
    } else {
        replies.push({
            type: 'text',
            content: 'Désolé, je n\'ai pas compris. Je suis un Bot un peu simplet. ^^\"',
        })
    }
    return replies
}
