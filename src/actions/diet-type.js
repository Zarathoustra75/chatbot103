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
            response = "Très bien ! Tu avez choisi le petit déjeuner"
            if(bodySlim) {
                cards = [
                    {
                        name: 'Petit-déjeuner spécial',
                        urlVideo: 'https://www.youtube.com/watch?v=ZkXylZai_KM',
                        urlImage: 'http://liezljayne.com/wp-content/uploads/2015/09/IMG_6131.jpg'
                    },
                    {
                        name: '5 petit-déjeuners healthy',
                        urlVideo: 'https://www.youtube.com/watch?v=cvnShgiocwQ',
                        urlImage: 'http://liezljayne.com/wp-content/uploads/2017/03/IMG_2406.jpg'
                    },
                    {
                        name: 'Petit-déjeuner pour bien commencer la semaine',
                        urlVideo: 'https://www.youtube.com/watch?v=WC3k-aUgOhY',
                        urlImage: 'http://img.taste.com.au/qkhi315n/w720-h480-cfill-q80/taste/2016/11/oat-and-berry-acai-bowl-104111-1.jpeg'
                    },
                ]
            }else if(bodyMaintain) {
                cards = [
                    {
                        name: '7 petit-déjeuners pour la semaine',
                        urlVideo: 'https://www.youtube.com/watch?v=xRgWtcFhMeA',
                        urlImage: 'https://i.ytimg.com/vi/VL72SaxrdTo/maxresdefault.jpg'
                    },
                    {
                        name: 'Smoothies pour le petit-déjeuner',
                        urlVideo: 'https://www.youtube.com/watch?v=CJN1n3fId_A',
                        urlImage: 'http://thedomesticgeek.com/wp-content/uploads/2014/06/SmoothieFruit2.jpg'
                    },
                    {
                        name: 'Reste en super santé',
                        urlVideo: 'https://www.youtube.com/watch?v=Za4mTc38yF8',
                        urlImage: 'http://rbk.h-cdn.co/assets/15/29/980x1470/5489f8070d099_-_rbk-high-protein-breakfasts-buckwheat-pancakes-s2.jpg'
                    },
                ]
            }else if(moreMuscle) {
                cards = [
                    {
                        name: 'Shake protéiné aux fruits',
                        urlVideo: 'https://www.youtube.com/watch?v=2sk1v8m6ePs',
                        urlImage: 'http://worldhealthsupplements.com/wp-content/uploads/2016/12/Protein-Shakes-For-Gaining-Healthy-Weight-300x160.jpg'
                    },
                    {
                        name: 'Cocktail protéiné',
                        urlVideo: 'https://www.youtube.com/watch?v=zSVwtMRhTs0',
                        urlImage: 'https://cdn2.wellplated.com/wp-content/uploads/2016/02/Slow-Cooker-Steel-Cut-Oats-with-Banana.jpg'
                    },
                    {
                        name: 'Conseils et tips pour prendre de la masse',
                        urlVideo: 'https://www.youtube.com/watch?v=uRpfGJdz5AM',
                        urlImage: 'http://fitlife.tv/wp-content/uploads/2017/04/shutterstock_626224457.jpg'
                    },
                ]
            }
        }else if(lunch) {
            response = "Très bien ! Tu avez choisi le déjeuner"
            if(bodySlim) {
                cards = [
                    {
                        name: 'Salade indienne',
                        urlVideo: 'https://www.youtube.com/watch?v=hjSk8w-17nk',
                        urlImage: 'http://img.fac.pmdstatic.net/fit/http.3A.2F.2Fwww.2Efemmeactuelle.2Efr.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Frecettes.2Fplat.2Fsalade-de-riz-et-lentilles-a-l-indienne-09367.2F14096413-1-fre-FR.2Fsalade-de-riz-et-lentilles-a-l-indienne.2Ejpg/1200x600/crop-from/center/salade-de-riz-et-lentilles-a-l-indienne.jpeg'
                    },
                    {
                        name: 'Délicieux repas',
                        urlVideo: 'https://www.youtube.com/watch?v=RMPzd__y4yc',
                        urlImage: 'https://i.ytimg.com/vi/9VXghw8IzRg/hqdefault.jpg'
                    },
                    {
                        name: '3 déjeuners healthy',
                        urlVideo: 'https://www.youtube.com/watch?v=9VXghw8IzRg',
                        urlImage: 'https://media1.popsugar-assets.com/files/thumbor/j_ketJTFzEHOyo3ZB-qM3qJZDno/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/09/17/050/n/1922729/81db3bd79f7f9a52_thumb_temp_cover_file13464971410984705/i/Healthy-Dinner-Recipes.jpg'
                    },
                ]
            }else if(bodyMaintain) {
                cards = [
                    {
                        name: '5 déjeuners healthy',
                        urlVideo: 'https://www.youtube.com/watch?v=SffWUBxXQ9E',
                        urlImage: 'https://i.ytimg.com/vi/TiNtS6wrgsk/maxresdefault.jpg'
                    },
                    {
                        name: '5 bols déjeuners',
                        urlVideo: 'https://www.youtube.com/watch?v=i9CF2XXdpno',
                        urlImage: 'https://i.ytimg.com/vi/eFnvYxR3oWo/maxresdefault.jpg'
                    },
                    {
                        name: '5 bentos pour déjeuner',
                        urlVideo: 'https://www.youtube.com/watch?v=RnWvNoFVQIA',
                        urlImage: 'https://i.ytimg.com/vi/-5Z8vFlW2hA/maxresdefault.jpg'
                    },
                ]
            }else if(moreMuscle) {
                cards = [
                    {
                        name: 'Repas calorique',
                        urlVideo: 'https://www.youtube.com/watch?v=c9X-TV2DeeI',
                        urlImage: 'https://i0.wp.com/www.skinnygotcurves.com/wp-content/uploads/2015/08/Korean2BTaco2BCover2BPic-1.jpg'
                    },
                    {
                        name: 'Repas pour super entraînement',
                        urlVideo: 'https://www.youtube.com/watch?v=wpLJXHUyvyM',
                        urlImage: 'https://incline.media/thumb.php?src=http://incline.media/user_upload/video_thumbs/-sOcVSvv5BU.jpg&w=500'
                    },
                    {
                        name: 'Déjeuner pour prise de masse',
                        urlVideo: 'https://www.youtube.com/watch?v=ioAytDp9ido',
                        urlImage: 'http://img.timeoutbeijing.com/201703/201703241221002.jpg'
                    },
                ]
            }
        }else if(snacks) {
            response = "Très bien ! Tu as choisi l'encas"
            if(bodySlim) {
                cards = [
                    {
                        name: 'Préparer un encas en 5 min',
                        urlVideo: 'https://www.youtube.com/watch?v=dJlbKAXJaNI',
                        urlImage: 'http://del.h-cdn.co/assets/17/15/980x490/landscape-1492036998-delish-capreseavocadotoast-01.jpg'
                    },
                    {
                        name: 'Encas facile et healthy',
                        urlVideo: 'https://www.youtube.com/watch?v=ydZedLblpFY',
                        urlImage: 'http://liezljayne.com/wp-content/uploads/2017/05/IMG_4870.jpg'
                    },
                    {
                        name: '9 encas pour perdre du poids',
                        urlVideo: 'https://www.youtube.com/watch?v=1iqnGFyVN0Y',
                        urlImage: 'https://www.rd.com/wp-content/uploads/sites/2/2016/05/12-healthy-snacks-cherry-tomato-goat-cheese.jpg'
                    },
                ]
            }else if(bodyMaintain) {
                cards = [
                    {
                        name: 'Encas faciles',
                        urlVideo: 'https://www.youtube.com/watch?v=ydZedLblpFY',
                        urlImage: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/13/0/FNK_banana-dippers_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387411745212.jpeg'
                    },
                    {
                        name: 'Encas sains et rapides',
                        urlVideo: 'https://www.youtube.com/watch?v=nonsm4WJze4',
                        urlImage: 'http://www.activemomsnetwork.com/media/k2/items/src/quick-healthy-snacks.jpg'
                    },
                    {
                        name: 'Encas rapides et faciles',
                        urlVideo: 'https://www.youtube.com/watch?v=JHpSsPWeUI0',
                        urlImage: 'http://www.wholefoodsmarket.com/sites/default/files/styles/header_recipe/public/media/2535.jpg'
                    },
                ]
            }else if(moreMuscle) {
                cards = [
                    {
                        name: 'Encas hypercaloriques',
                        urlVideo: 'https://www.youtube.com/watch?v=8VjqqNF-LXU',
                        urlImage: 'http://www.leseclaireuses.com/ec_content/mathilde/20160314-encas-14316_2.jpg'
                    },
                    {
                        name: 'Encas sains et caloriques',
                        urlVideo: 'https://www.youtube.com/watch?v=RIJ2Jclv9Dg',
                        urlImage: 'https://cdn2.hercampus.com/HN_BB_Snack_Well_12_11_12_v2-img_1280x720.png'
                    },
                    {
                        name: 'Encas pour rester en forme',
                        urlVideo: 'https://www.youtube.com/watch?v=tS6Te33k1qM',
                        urlImage: 'http://cache.marieclaire.fr/data/photo/w1000_ci/4u/recette-healthy-snacks-enfant.jpg'
                    },
                ]
            }
        }else if(dinner) {
            response = "Très bien ! Tu as choisi le dîner"
            if(bodySlim) {
                cards = [
                    {
                        name: 'Salade indienne',
                        urlVideo: 'https://www.youtube.com/watch?v=hjSk8w-17nk',
                        urlImage: 'http://img.taste.com.au/DFWd3E8Z/w720-h480-cfill-q80/taste/2016/11/indian-chopped-salad-98187-1.jpeg'
                    },
                    {
                        name: 'Exemple de recette équilibrée',
                        urlVideo: 'https://www.youtube.com/watch?v=RMPzd__y4yc',
                        urlImage: 'https://www.womenfitness.net/wp/wp-content/uploads/2016/09/WEIGHT-LOSS.jpg'
                    },
                    {
                        name: '3 déjeuners sans salade',
                        urlVideo: 'https://www.youtube.com/watch?v=9VXghw8IzRg',
                        urlImage: 'https://cloud.lovindublin.com/images/uploads/2015/04/_blogWide/Screen-Shot-2015-04-07-at-15.50.16.png?mtime=20150407155039'
                    },
                ]
            }else if(bodyMaintain) {
                cards = [
                    {
                        name: '3 idées de diners',
                        urlVideo: 'https://www.youtube.com/watch?v=mdnEnshtoIU',
                        urlImage: 'http://aspenspecialtyfoods.com/wp-content/uploads/2017/03/Quick-and-Healthy-Dinner-Recipes.jpg'
                    },
                    {
                        name: 'Idées de diners simples',
                        urlVideo: 'https://www.youtube.com/watch?v=yVqlMwaX3E8',
                        urlImage: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/3/5/1/FNK_Healthy-Kids-Chicken-Pot-Popovers_s4x3.jpg.rend.hgtvcom.966.725.suffix/1396383069396.jpeg'
                    },
                    {
                        name: 'Diners diététiques',
                        urlVideo: 'https://www.youtube.com/watch?v=k4sED-Aea4Q',
                        urlImage: 'http://www.formeathletique.com/wp-content/uploads/2016/02/exercice-abdominaux2.jpg'
                    },
                ]
            }else if(moreMuscle) {
                cards = [
                    {
                        name: 'Salade caesar à l\'avocat',
                        urlVideo: 'https://www.youtube.com/watch?v=c9X-TV2DeeI',
                        urlImage: 'https://www.papillesetpupilles.fr/wp-content/uploads/2012/06/Salade-Cesar-au-poulet-et-%C3%A0-lavocat-du-P%C3%A9rou.jpg'
                    },
                    {
                        name: 'Le plan dietétique',
                        urlVideo: 'https://www.youtube.com/watch?v=hzGDJFdAaGY',
                        urlImage: 'http://25.media.tumblr.com/50b2f701a59e0cec6fa82f164c8b03a3/tumblr_mzthetV6hc1rzwdbxo1_500.jpg'
                    },
                    {
                        name: 'Idées de préparations rapides',
                        urlVideo: 'https://www.youtube.com/watch?v=ioAytDp9ido',
                        urlImage: 'http://blog.getfitso.com/wp-content/uploads/2016/12/mealplanphoto-1024x576.jpg'
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
