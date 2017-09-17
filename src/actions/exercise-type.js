const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function exerciseType(res, payload) {
    console.log('EXERCISE TYPE')

    const men = res.getMemory('men')
    const women = res.getMemory('women')

    const bodySlim = res.getMemory('bodyslim')
    const bodyMaintain = res.getMemory('bodymaintain')
    const moreMuscle = res.getMemory('moremuscle')

    const home = res.entities['home']
    const indoor = res.entities['indoor']
    const outdoor = res.entities['outdoor']

    let response = ""
    const replies = []
    let cards = []

    if (home) {
        response = "Très bien ! Tu as choisi de faire du sport chez toi !"
        if(bodySlim) {
            if(men) {
                cards = [
                    {
                        name: 'Gainage pour débutant',
                        urlVideo: 'https://www.youtube.com/watch?v=p4EZfNp24fA',
                        urlImage: 'http://blog.domicilgym.fr/wp-content/uploads/2016/07/sport-homme-chaleur.jpg'
                    },
                    {
                        name: 'Abos en bétons',
                        urlVideo: 'https://www.youtube.com/watch?v=AWb9qUPmpR4',
                        urlImage: 'http://op-spe-cdn.20mn.fr/magazine/wp-content/uploads/sites/2/2014/02/photo-Fysiki-645x400.jpg'
                    },
                    {
                        name: 'Tibo',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'https://yt3.ggpht.com/-Zbx5nbYMCM8/AAAAAAAAAAI/AAAAAAAAAAA/YZ4Lebmnjz0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
                    },
                ]
            }else if(women) {
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
        }else if(bodyMaintain) {
            if(men) {
                cards = [
                    {
                        name: 'Gainage pour débutant',
                        urlVideo: 'https://www.youtube.com/watch?v=p4EZfNp24fA',
                        urlImage: 'http://blog.domicilgym.fr/wp-content/uploads/2016/07/sport-homme-chaleur.jpg'
                    },
                    {
                        name: 'Abos en bétons',
                        urlVideo: 'https://www.youtube.com/watch?v=AWb9qUPmpR4',
                        urlImage: 'http://op-spe-cdn.20mn.fr/magazine/wp-content/uploads/sites/2/2014/02/photo-Fysiki-645x400.jpg'
                    },
                    {
                        name: 'Tibo',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'https://yt3.ggpht.com/-Zbx5nbYMCM8/AAAAAAAAAAI/AAAAAAAAAAA/YZ4Lebmnjz0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
                    },
                ]
            }else if(women) {
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
        }else if(moreMuscle) {
            if(men) {
                cards = [
                    {
                        name: 'Gainage pour débutant',
                        urlVideo: 'https://www.youtube.com/watch?v=p4EZfNp24fA',
                        urlImage: 'http://blog.domicilgym.fr/wp-content/uploads/2016/07/sport-homme-chaleur.jpg'
                    },
                    {
                        name: 'Abos en bétons',
                        urlVideo: 'https://www.youtube.com/watch?v=AWb9qUPmpR4',
                        urlImage: 'http://op-spe-cdn.20mn.fr/magazine/wp-content/uploads/sites/2/2014/02/photo-Fysiki-645x400.jpg'
                    },
                    {
                        name: 'Tibo',
                        urlVideo: 'https://youtube.com',
                        urlImage: 'https://yt3.ggpht.com/-Zbx5nbYMCM8/AAAAAAAAAAI/AAAAAAAAAAA/YZ4Lebmnjz0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
                    },
                ]
            }else if(women) {
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
        }
    }else if(indoor) {
        response = "Très bien ! Tu as choisi de faire du sport en salle !"
        if(bodySlim) {
            if(men) {
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
            }else if(women) {
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
        }else if(bodyMaintain) {
            if(men) {
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
            }else if(women) {
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
        }else if(moreMuscle) {
            if(men) {
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
            }else if(women) {
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
        }
    }else if(outdoor) {
        response = "Très bien ! Tu as choisi de faire du sport en extérieur !"
        if(bodySlim) {
            if(men) {
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
            }else if(women) {
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
        }else if(bodyMaintain) {
            if(men) {
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
            }else if(women) {
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
        }else if(moreMuscle) {
            if(men) {
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
            }else if(women) {
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

    return replies
}

