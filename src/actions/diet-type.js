const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function dietType(res, payload) {
    console.log('EXERCISE TYPE')

    const breakfast = res.getMemory('breakfast')
    const lunch = res.getMemory('lunch')
    const snacks = res.getMemory('snacks')
    const dinner = res.getMemory('dinner')

    const men = res.getMemory('men')
    const women = res.getMemory('women')


    let response = ""
    const replies = []
    let cards = []

    if (men) {
        if(breakfast){
        response = "Tres bien vous avez choisi de prendre un petit déjeuner"
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
        else if(lunch){
            response = "Tres bien vous avez choisi de prendre un déjeuner"
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
        else if(snacks){
            response = "Tres bien vous avez choisi de prendre un encas"
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
        else if(dinner){
            response = "Tres bien vous avez choisi de prendre un diner"
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
    } else if (women) {
        if (breakfast) {
            response = "Tres bien vous avez choisi de prendre un petit dejeuner"
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
            ]
        }
        else if (lunch) {
            response = "Tres bien vous avez choisi de prendre un dejeuner"
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
            ]
        }
        else if (snacks) {
            response = "Tres bien vous avez choisi de prendre un encas"
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
            ]
        }
        else if (dinner) {
            response = "Tres bien vous avez choisi de prendre un diner"
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
            ]
        }
    }

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
