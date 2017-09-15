const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const request = require('superagent');


export default async function dietType(res, payload) {
    console.log('DIET TYPE')

    const men = res.getMemory('men')
    const women = res.getMemory('women')

    const bodyslim = res.getMemory('bodyslim')
    const bodymaintain = res.getMemory('bodymaintain')
    const moremuscle = res.getMemory('moremuscle')

    const breakfast = res.getMemory('breakfast')
    const lunch = res.getMemory('lunch')
    const snacks = res.getMemory('snacks')
    const dinner = res.getMemory('dinner')


    let response = ""
    const replies = []
    let cards = []

        if(breakfast && men && bodyslim){
        response = "Très bien vous avez choisi de prendre un petit déjeuner"
        cards = [
            {
                name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(breakfast && men && bodymaintain){
        response = "Très bien vous avez choisi de prendre un petit déjeuner"
        cards = [
            {
                name: 'EXERCISE NAME1 mens',
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
            ]}
             else if(breakfast && men && moremuscle){
            response = "Très bien vous avez choisi de prendre un petit déjeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(lunch && men && bodyslim){
            response = "Très bien vous avez choisi de prendre un déjeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(lunch && men && bodymaintain){
            response = "Très bien vous avez choisi de prendre un déjeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(lunch && men && moremuscle){
            response = "Très bien vous avez choisi de prendre un déjeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(snacks && men && bodyslim){
            response = "Très bien vous avez choisi de prendre un encas"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(snacks && men && bodymaintain){
            response = "Très bien vous avez choisi de prendre un encas"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(snacks && men && moremuscle){
            response = "Très bien vous avez choisi de prendre un encas"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(dinner && men && bodyslim){
            response = "Très bien vous avez choisi de prendre un diner"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(dinner && men && bodymaintain){
            response = "Très bien vous avez choisi de prendre un diner"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}
            else if(dinner && men && moremuscle){
            response = "Très bien vous avez choisi de prendre un diner"
            cards = [
                {
                    name: 'EXERCISE NAME1 mens',
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
            ]}

        else if (breakfast && women && bodyslim) {
            response = "Très bien vous avez choisi de prendre un petit dejeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (breakfast && women && bodymaintain) {
            response = "Très bien vous avez choisi de prendre un petit dejeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (breakfast && women && moremuscle) {
            response = "Très bien vous avez choisi de prendre un petit dejeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (lunch && women && bodyslim) {
            response = "Très bien vous avez choisi de prendre un dejeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (lunch && women && bodymaintain) {
            response = "Très bien vous avez choisi de prendre un dejeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (lunch && women && moremuscle) {
            response = "Très bien vous avez choisi de prendre un dejeuner"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (snacks && women && bodyslim) {
            response = "Très bien vous avez choisi de prendre un encas"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (snacks && women && bodymaintain) {
            response = "Très bien vous avez choisi de prendre un encas"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (snacks && women && moremuscle) {
            response = "Très bien vous avez choisi de prendre un encas"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (dinner && women && bodyslim) {
            response = "Très bien vous avez choisi de prendre un diner"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (dinner && women && bodymaintain) {
            response = "Très bien vous avez choisi de prendre un diner"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else if (dinner && women && moremuscle) {
            response = "Très bien vous avez choisi de prendre un diner"
            cards = [
                {
                    name: 'EXERCISE NAME1 womens',
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
        }
        else {
                reponse = 'Il manque un paramètre de configuration'
        }

    request
        .put('https://api.recast.ai/v2/converse')
        .send({
            conversation_token: '1404640066256134',
            memory: {
                breakfast: null,
                lunch: null,
                snacks: null,
                dinner: null,
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
