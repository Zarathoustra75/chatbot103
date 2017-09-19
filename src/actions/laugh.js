const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')


export default async function laugh(res, payload) {
    console.log('LAUGH')

    const replies = []
    const laughs = [
        'https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif',
        'https://media.giphy.com/media/jQmVFypWInKCc/giphy.gif',
        'https://media.giphy.com/media/xUPOqrl3x2SkKjE3Is/giphy.gif',
        'https://media.giphy.com/media/GpyS1lJXJYupG/giphy.gif',
    ]
    replies.push(formatter.formatImg(laughs[Math.floor(Math.random() * laughs.length)]))
    return replies
}