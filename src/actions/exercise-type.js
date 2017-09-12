const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function exerciseType(res, payload) {
    console.log('EXERCISE TYPE')

    const home = res.getMemory('home')
    const indoor = res.getMemory('indoor')
    const outdoor = res.getMemory('outdoor')

    let response = ""
    const replies = []
    let cards = []
    if (home) {
        response = "Très bien vous avez choisi de faire du sport chez vous"
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
    } else if (indoor) {
        response = "Très bien vous avez choisi de faire du sport en interieur"
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
    } else if (outdoor) {
        response = "Très bien vous avez choisi de faire du sport en exterieur"
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

