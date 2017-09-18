const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

import diet from './diet'

export default async function dietType(res, payload) {
    console.log('DIET TYPE')

    const men = res.getMemory('men')
    const women = res.getMemory('women')

    const bodySlim = res.getMemory('bodyslim')
    const bodyMaintain = res.getMemory('bodymaintain')
    const moreMuscle = res.getMemory('moremuscle')

    const breakfast = res.entities['breakfast']
    const lunch = res.entities['lunch']
    const snacks = res.entities['snacks']
    const dinner = res.entities['dinner']

    let response = ""
    const replies = []
    let cards = []

    if((men || women) && (bodySlim || moreMuscle || bodyMaintain) && (breakfast || lunch || snacks || dinner)){

        if(breakfast) {
            response = "Très bien ! Tu avez choisi le Petit Déjeuner"
            if(bodySlim) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }else if(bodyMaintain) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }else if(moreMuscle) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }
        }else if(lunch) {
            response = "Très bien ! Tu avez choisi le Déjeuner"
            if(bodySlim) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }else if(bodyMaintain) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }else if(moreMuscle) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }
        }else if(snacks) {
            response = "Très bien ! Tu as choisi l'Encas"
            if(bodySlim) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }else if(bodyMaintain) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }else if(moreMuscle) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }
        }else if(dinner) {
            response = "Très bien ! Tu as choisi le dîner"
            if(bodySlim) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }else if(bodyMaintain) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }else if(moreMuscle) {
                cards = [
                    {
                        name: 'RECETTE NAME1',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME2',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                    {
                        name: 'RECETTE NAME3',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }
        }else{
            response = res.reply()
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

    } else {

        let subreplies = await diet(res)
        subreplies.forEach((l) => {
            replies.push(l)
        })
        
    }

    return replies
}
