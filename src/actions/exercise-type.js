const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
import exercise from './exercise'

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

    if ((men || women) && (bodySlim || moreMuscle || bodyMaintain) && (home || indoor || outdoor)) {

        if (home) {
            response = "Très bien ! Tu as choisi de faire du sport chez toi !"
            if (bodySlim) {
                if (men) {
                    cards = [
                        {
                            name: 'Circuit cardio training',
                            urlVideo: 'https://www.youtube.com/watch?v=mW9NqoxLEZ4&index=8&list=PL_c94gK3LQbcsMpBe5MV1RrdlQVgtwKzo',
                            urlImage: 'https://i.ytimg.com/vi/mW9NqoxLEZ4/maxresdefault.jpg'
                        },
                        {
                            name: 'Entraînement de 10 min',
                            urlVideo: 'https://www.youtube.com/watch?v=oQO4W7-vKlE&list=PL_c94gK3LQbcsMpBe5MV1RrdlQVgtwKzo&index=4',
                            urlImage: 'https://i.ytimg.com/vi/6J98PVnGYPY/maxresdefault.jpg'
                        },
                        {
                            name: 'Entraînement boxe',
                            urlVideo: 'https://www.youtube.com/watch?v=Vma-kKYPtOE',
                            urlImage: 'http://mf.imdoc.fr/content/8/9/1/538918/FITNESS-MASTER-CLASS_CARDIO_BOXING_WORKOUT.jpg'
                        },
                    ]
                } else if (women) {
                    cards = [
                        {
                            name: 'Entraînement brûler des calories',
                            urlVideo: 'https://www.youtube.com/watch?v=C8LxBcVjJK4',
                            urlImage: 'http://www.joannasoh.com/uploads/authors/1/fitness/featured/4-week-beginner-fat-burning-plan.jpeg'
                        },
                        {
                            name: '35 min de l\'enfer',
                            urlVideo: 'https://www.youtube.com/watch?v=l9KpDHMB-64&t=',
                            urlImage: 'https://cdn-resoltz-assets.azureedge.net/content/images/trainers/millionaire-hoy/bg-trainer-profile-3.jpg'
                        },
                        {
                            name: 'Abdos en béton',
                            urlVideo: 'https://www.youtube.com/watch?v=f3gMJ0HEp-U',
                            urlImage: 'http://4.bp.blogspot.com/-8SpRKI8L2bo/VSOYEpRyJxI/AAAAAAAAECw/WB5Svq6ereo/s1600/3.jpg'
                        },
                    ]
                }
            } else if (bodyMaintain) {
                if (men) {
                    cards = [
                        {
                            name: '15 minutes pour se donner',
                            urlVideo: 'https://www.youtube.com/watch?v=B38ttorbISM',
                            urlImage: 'http://projectlifemastery.com/wp-content/uploads/2013/04/the-healthy-gamer.png'
                        },
                        {
                            name: 'Abdos en bétons',
                            urlVideo: 'https://www.youtube.com/watch?v=hMzZrecgIeE',
                            urlImage: 'http://i.ytimg.com/vi/hMzZrecgIeE/mqdefault.jpg'
                        },
                        {
                            name: 'Entraînement jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=agtGOW-Dc1o',
                            urlImage: 'https://i.ytimg.com/vi/agtGOW-Dc1o/hqdefault.jpg'
                        },
                    ]
                } else if (women) {
                    cards = [
                        {
                            name: 'Entraînement hanches et fesses',
                            urlVideo: 'https://www.youtube.com/watch?v=HHn-oT3CEF4',
                            urlImage: 'https://i2.wp.com/hellowsubmarine.com/wp-content/uploads/2016/05/Blogilates-Bikini-Workout.jpg?resize=300%2C300'
                        },
                        {
                            name: 'Abdos en béton',
                            urlVideo: 'https://www.youtube.com/watch?v=LebPal5gKrc',
                            urlImage: 'https://eusemqualidades.files.wordpress.com/2015/04/xhit-daily-exercicios-fitness-em-casa-eusemqualidadesblog.jpg'
                        },
                        {
                            name: 'Entraînement fesses',
                            urlVideo: 'https://www.youtube.com/watch?v=i1ZzdBgLtZg',
                            urlImage: 'https://i.ytimg.com/vi/XS4B7ae274Q/maxresdefault.jpg'
                        },
                    ]
                }
            } else if (moreMuscle) {
                if (men) {
                    cards = [
                        {
                            name: 'Entraînement Full Body',
                            urlVideo: 'https://www.youtube.com/watch?v=r0SiYkT2V5w',
                            urlImage: 'https://i.pinimg.com/originals/1d/4a/74/1d4a744a1e4fefe7cce70ed3fb588707.jpg'
                        },
                        {
                            name: 'Entraînement jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=X8er7GnG3lk',
                            urlImage: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20482467_124512691502877_6513362383065317376_n.jpg'
                        },
                        {
                            name: 'Abdos en béton',
                            urlVideo: 'https://www.youtube.com/watch?v=F8dWv0M1nNg',
                            urlImage: 'https://i.ytimg.com/vi/ZnNl1f3qFMk/maxresdefault.jpg'
                        },
                    ]
                } else if (women) {
                    cards = [
                        {
                            name: 'Hanches de déesse',
                            urlVideo: 'https://www.youtube.com/watch?v=VI4kzarjbaU',
                            urlImage: 'https://i.ytimg.com/vi/H8vnVrbK_Tc/maxresdefault.jpg'
                        },
                        {
                            name: 'Super squat challenge',
                            urlVideo: 'https://www.youtube.com/watch?v=m4x7rqyENvk',
                            urlImage: 'https://i.ytimg.com/vi/kJwlTlft26E/maxresdefault.jpg'
                        },
                        {
                            name: 'Triceps pour bras sexy',
                            urlVideo: 'https://www.youtube.com/watch?v=Hcez1ABNLAo',
                            urlImage: 'https://www.autumncalabrese.com/wp-content/uploads/2015/03/maxresdefault-2.jpg'
                        },
                    ]
                }
            }
        } else if (indoor) {
            response = "Très bien ! Tu as choisi de faire du sport en salle !"
            if (bodySlim) {
                if (men) {
                    cards = [
                        {
                            name: 'Entraînement cardio',
                            urlVideo: 'https://www.youtube.com/watch?v=oen_O9sfvuU',
                            urlImage: 'http://s1.dmcdn.net/TIgks/1280x720-acp.jpg'
                        },
                        {
                            name: 'Circuit training',
                            urlVideo: 'https://www.youtube.com/watch?v=m0OR2WZUJxM',
                            urlImage: 'https://i.ytimg.com/vi/iwQPOuFQyXY/maxresdefault.jpg'
                        },
                        {
                            name: 'Brûleur de calories',
                            urlVideo: 'https://www.youtube.com/watch?v=BwsFcneRp_E',
                            urlImage: 'https://i.ytimg.com/vi/xuueJk50Ppk/maxresdefault.jpg'
                        },
                    ]
                } else if (women) {
                    cards = [
                        {
                            name: 'Brûler des calories',
                            urlVideo: 'https://www.youtube.com/watch?v=UqFzWx8X5AM&t=',
                            urlImage: 'http://www.joannasoh.com/uploads/authors/1/fitness/featured/4-week-beginner-fat-burning-plan.jpeg'
                        },
                        {
                            name: 'Abdos en béton',
                            urlVideo: 'https://www.youtube.com/watch?v=kzYQxZPZtNM',
                            urlImage: 'http://4.bp.blogspot.com/-8SpRKI8L2bo/VSOYEpRyJxI/AAAAAAAAECw/WB5Svq6ereo/s1600/3.jpg'
                        },
                        {
                            name: 'Avoir des bras sexy',
                            urlVideo: 'https://www.youtube.com/watch?v=oXf1sfQ-HwM',
                            urlImage: 'https://dioxyme.com/wp-content/uploads/2016/10/whitney-simmons2.jpg'
                        },
                    ]
                }
            } else if (bodyMaintain) {
                if (men) {
                    cards = [
                        {
                            name: 'Crossfit Tabata',
                            urlVideo: 'https://www.youtube.com/watch?v=ieQLwxA2qGY',
                            urlImage: 'http://img1.cfstatic.com/crossfit/froning_85491_w460.jpg'
                        },
                        {
                            name: 'Abdos en béton',
                            urlVideo: 'https://www.youtube.com/watch?v=8jyhJ6TiUPA',
                            urlImage: 'https://i.ytimg.com/vi/EB8Iom51fdA/hqdefault.jpg'
                        },
                        {
                            name: 'Entraînement jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=ilF_iVyukNI',
                            urlImage: 'https://i.ytimg.com/vi/ilF_iVyukNI/maxresdefault.jpg'
                        },
                    ]
                } else if (women) {
                    cards = [
                        {
                            name: 'Entraînement Full Body débutante',
                            urlVideo: 'https://www.youtube.com/watch?v=6B4vuecH1Wg',
                            urlImage: 'https://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/19425064_764972127018317_4843233340351840256_n.jpg?ig_cache_key=MTU0Mzk3OTQ4MTM3MDU4MTE0OQ%3D%3D.2'
                        },
                        {
                            name: 'Entraînement jambes débutante',
                            urlVideo: 'https://www.youtube.com/watch?v=cg-hanQLzD4',
                            urlImage: 'https://i.pinimg.com/736x/f4/90/8c/f4908c785bb8c0cddb51aa16de93b3ef--workout-videos-glutes.jpg'
                        },
                        {
                            name: 'Abdos en béton',
                            urlVideo: 'https://www.youtube.com/watch?v=f3gMJ0HEp-U',
                            urlImage: 'https://www.mygingerorange.com/wp-content/uploads/2015/11/2.png'
                        },
                    ]
                }
            } else if (moreMuscle) {
                if (men) {
                    cards = [
                        {
                            name: 'Crossfit Tabata',
                            urlVideo: 'https://www.youtube.com/watch?v=n5LbbftRaDs',
                            urlImage: 'https://i.ytimg.com/vi/n5LbbftRaDs/maxresdefault.jpg'
                        },
                        {
                            name: 'Entraînement pectoraux et épaules',
                            urlVideo: 'https://www.youtube.com/watch?v=fV_Cf5sI3Ow&index=2&list=PL_c94gK3LQbcdCR7Co-4B0PQJZ2xTb3u0',
                            urlImage: 'https://yt3.ggpht.com/-xH_-5JsTcQQ/AAAAAAAAAAI/AAAAAAAAAAA/b15Yd1ZgPC0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
                        },
                        {
                            name: 'Killer jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=EeDTwcF-TnU',
                            urlImage: 'https://i.ytimg.com/vi/EeDTwcF-TnU/hqdefault.jpg'
                        },
                    ]
                } else if (women) {
                    cards = [
                        {
                            name: 'Bras sexy',
                            urlVideo: 'https://www.youtube.com/watch?v=iCNxMQarm14',
                            urlImage: 'https://cdn-media.sportamore.se/images/kb1.width-800.png'
                        },
                        {
                            name: 'Fesses bombées',
                            urlVideo: 'https://www.youtube.com/watch?v=8kk_bMVNQ4M',
                            urlImage: 'https://i.ytimg.com/vi/8kk_bMVNQ4M/mqdefault.jpg'
                        },
                        {
                            name: 'Avoir des hanches plus larges',
                            urlVideo: 'https://www.youtube.com/watch?v=JW8hRIDeWd0&t=2s',
                            urlImage: 'https://i.pinimg.com/236x/9c/0a/dd/9c0add4ed4de81dabd898efc2efc802c--how-to-get-rid-of-violin-hips-how-to-get-rid-of-hip-dips.jpg'
                        },
                    ]
                }
            }
        } else if (outdoor) {
            response = "Très bien ! Tu as choisi de faire du sport en extérieur !"
            if (bodySlim) {
                if (men) {
                    cards = [
                        {
                            name: 'Perte de poids',
                            urlVideo: 'https://www.youtube.com/watch?v=dlantbhXp4Y',
                            urlImage: 'https://i.ytimg.com/vi/dlantbhXp4Y/hqdefault.jpg'
                        },
                        {
                            name: 'Abdos en béton',
                            urlVideo: 'https://www.youtube.com/watch?v=tgkqyJp8gu4',
                            urlImage: 'http://thenx.com/newDesign/images/trainer_1.png'
                        },
                        {
                            name: 'Entraînement jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=4H920oAfowE',
                            urlImage: 'https://thenx.com/blog/wp-content/uploads/2017/03/Screen-Shot-2017-03-08-at-12.51.25-PM.png'
                        },
                    ]
                } else if (women) {
                    cards = [
                        {
                            name: 'Entraînement Full Body',
                            urlVideo: 'https://www.youtube.com/watch?v=OB9nZBkiRGw',
                            urlImage: 'https://i.ytimg.com/vi/OB9nZBkiRGw/maxresdefault.jpg'
                        },
                        {
                            name: 'Entraînement jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=A-awo-Bj3jM',
                            urlImage: 'https://media1.popsugar-assets.com/files/thumbor/Fec1jvOGuiie69ALkH-XTfe2ROk/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2013/09/18/962/n/1922729/b618c2087674d55f_side-stairs.jpg'
                        },
                        {
                            name: 'Entraînement cardio',
                            urlVideo: 'https://www.youtube.com/watch?v=jZHjct3i_pQ',
                            urlImage: 'https://i.ytimg.com/vi/aR-L8pLMM60/maxresdefault.jpg'
                        },
                    ]
                }
            } else if (bodyMaintain) {
                if (men) {
                    cards = [
                        {
                            name: 'Débuter le street workout',
                            urlVideo: 'https://www.youtube.com/watch?v=kIVxdIWy7Eo',
                            urlImage: 'https://i2.wp.com/video.log3.org/wp-content/uploads/2017/04/start-calisthenics-with-this-workout-thenx.jpg'
                        },
                        {
                            name: 'Entraînement jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=flQVCWBuVgk',
                            urlImage: 'https://i.ytimg.com/vi/flQVCWBuVgk/maxresdefault.jpg'
                        },
                        {
                            name: 'Entraînement bras et pectoraux',
                            urlVideo: 'https://www.youtube.com/watch?v=GdISLQcG8BA',
                            urlImage: 'https://i.ytimg.com/vi/WzFMnRUzYog/hqdefault.jpg'
                        },
                    ]
                } else if (women) {
                    cards = [
                        {
                            name: 'Entraînement Full body',
                            urlVideo: 'https://www.youtube.com/watch?v=b5BEzPVvTWU',
                            urlImage: 'https://i.ytimg.com/vi/b5BEzPVvTWU/maxresdefault.jpg'
                        },
                        {
                            name: 'Entraînement en cadence de 10 répétitions',
                            urlVideo: 'https://www.youtube.com/watch?v=uU0x920L3eA',
                            urlImage: 'https://68.media.tumblr.com/a5b0887aeca41bb21b6c6c078f517b63/tumblr_nqft5lMl8t1uq9apho1_1280.jpg'
                        },
                        {
                            name: 'Entraînement fesses et jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=GutXq3ijDaI',
                            urlImage: 'https://i.ytimg.com/vi/GutXq3ijDaI/hqdefault.jpg'
                        },
                    ]
                }
            } else if (moreMuscle) {
                if (men) {
                    cards = [
                        {
                            name: 'Entraînement dos',
                            urlVideo: 'https://www.youtube.com/watch?v=tB3X4TjTIes',
                            urlImage: 'https://i.ytimg.com/vi/2O972NPjM58/hqdefault.jpg'
                        },
                        {
                            name: 'Entraînement bras et pectoraux',
                            urlVideo: 'https://www.youtube.com/watch?v=GdISLQcG8BA',
                            urlImage: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/e15/c0.89.720.720/16789778_378470315873737_7263425120767574016_n.jpg'
                        },
                        {
                            name: 'Entraînement jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=q3FLp036yhk',
                            urlImage: 'https://i.ytimg.com/vi/q3FLp036yhk/hqdefault.jpg'
                        },
                    ]
                } else if (women) {
                    cards = [
                        {
                            name: 'Entraînement Full Body',
                            urlVideo: 'https://www.youtube.com/watch?v=NyZeB7mdrfk',
                            urlImage: 'https://i.ytimg.com/vi/n8pcMqB43Oo/hqdefault.jpg'
                        },
                        {
                            name: 'Entraînement fessiers et jambes',
                            urlVideo: 'https://www.youtube.com/watch?v=AeQTP_RlWLE',
                            urlImage: 'https://i.ytimg.com/vi/AeQTP_RlWLE/maxresdefault.jpg'
                        },
                        {
                            name: 'Entraînement bras et épaules',
                            urlVideo: 'https://www.youtube.com/watch?v=ksxzolsihM8',
                            urlImage: 'https://i.ytimg.com/vi/ksxzolsihM8/hqdefault.jpg'
                        },
                    ]
                }
            }
        } else {
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
        let subreplies = await exercise(res)
        subreplies.forEach((l) => {
            replies.push(l)
        })
    }
    return replies
}