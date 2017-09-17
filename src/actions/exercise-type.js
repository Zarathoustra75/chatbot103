const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const request = require('superagent');


export default async function exerciseType(res, payload) {
    console.log('EXERCISE TYPE')


    let men = res.getMemory('men')
    let women = res.getMemory('women')

    const bodyslim = res.getMemory('bodyslim')
    const bodymaintain = res.getMemory('bodymaintain')
    const moremuscle = res.getMemory('moremuscle')

    let home = res.getMemory('home')
    let indoor = res.getMemory('indoor')
    let outdoor = res.getMemory('outdoor')

    const conversation = res.conversationToken


    let response = ""
    const replies = []
    let cards = []


    if (home && men && bodyslim) {
        response = "Très bien tu as choisi de faire du sport chez toi !HMS"
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
    } else if (home && men && bodymaintain) {
        response = "Très bien tu as choisi de faire du sport chez toi !HM"
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
    } else if (home && men && moremuscle) {
        response = "Très bien tu as choisi de faire du sport chez toi !HM"
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
    }
    else if (indoor && men && bodyslim) {
        response = "Très bien tu as choisi de faire du sport en intérieur !HIJJJ"
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
    else if (indoor && men && bodymaintain) {
        response = "Très bien tu as choisi de faire du sport en intérieur !HIM"
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
    else if (indoor && men && moremuscle) {
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
    } else if (outdoor && men && bodyslim) {
        response = "Très bien tu as choisi de faire du sport en extérieur !HDJJJ"
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
    else if (outdoor && men && bodymaintain) {
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
    }
    else if (outdoor && men && moremuscle) {
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
    } else if (home && women && bodyslim) {
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
    }
    else if (home && women && bodymaintain) {
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
    }
    else if (home && women && moremuscle) {
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
    } else if (indoor && women && bodyslim) {
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
    }
    else if (indoor && women && bodymaintain) {
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
    }
    else if (indoor && women && moremuscle) {
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
    } else if (outdoor && women && bodyslim) {
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
    }
    else if (outdoor && women && bodymaintain) {
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
    }
    else if (outdoor && women && moremuscle) {
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
            conversation_token: conversation,
            memory: {
                home: null,
                indoor: null,
                outdoor: null,
            }
        })
        .set('Authorization', 'Token 0c35c0e7982d5fb9b935659d48e2eaab')
        .end(function (err, res) {
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

