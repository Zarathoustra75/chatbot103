const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const request = require('superagent');


export default async function exerciseType(res, payload) {
    console.log('EXERCISE TYPE')

    let men = res.getMemory('men')
    let women = res.getMemory('women')

    let home = res.getMemory('home')
    let indoor = res.getMemory('indoor')
    let outdoor = res.getMemory('outdoor')


    let response = ""
    const replies = []
    let cards = []


        if (home && men) {
            response = "Très bien tu as choisi de faire du sport chez toi !HM"
            cards = [
                {
                    name: 'EXERCISE NAME1',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME2',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME3',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
            ]
        } else if (indoor && men) {
            response = "Très bien tu as choisi de faire du sport en intérieur !HI"
            cards = [
                {
                    name: 'EXERCISE NAME1',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME2',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME3',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
            ]
        } else if (outdoor && men) {
            response = "Très bien tu as choisi de faire du sport en extérieur !HD"
            cards = [
                {
                    name: 'EXERCISE NAME1',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME2',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME3',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
            ]
        } else if (home && women) {
            response = "Très bien tu as choisi de faire du sport en extérieur !FM"
            cards = [
                {
                    name: 'EXERCISE NAME1',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME2',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME3',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
            ]
        } else if (indoor && women) {
            response = "Très bien tu as choisi de faire du sport en extérieur !FI"
            cards = [
                {
                    name: 'EXERCISE NAME1',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME2',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME3',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
            ]
        } else if (outdoor && women) {
            response = "Très bien tu as choisi de faire du sport en extérieur !FD"
            cards = [
                {
                    name: 'EXERCISE NAME1',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME2',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
                {
                    name: 'EXERCISE NAME3',
                    urlVideo: 'https://youtube.com',
                    urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                },
            ]
        } else {
            reponse = 'Il manque un paramètre de configuration'
        }

    request
        .put('https://api.recast.ai/v2/converse')
        .send({
            conversation_token: '1404640066256134',
            memory: {
                home: null,
                indoor: null,
                outdoor: null,
            }
        })
        .set('Authorization', 'Token 0c35c0e7982d5fb9b935659d48e2eaab')
        .end(function(err, res) {
            console.log(err)
        })


    replies.push(formatter.formatMsg(response))


    const cardsReplies = []

    cards.forEach((c) => {
            cardsReplies.push({
            name: c.name,
            picture: c.urlImage,
            link: c.urlVideo,
        })
    })

        replies.push(formatter.formatCardsReplies(cardsReplies))
    return replies
}

