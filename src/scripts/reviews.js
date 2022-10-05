const reviews = [
    {   
        id: 0,
        name: 'Ельвіра',
        rate: '5',
        title: 'Підготовка до ДПА',
        text: 'Викладачом задоволени і я і дитина. Заняття проходять цикаво та невимушено. '
    },
    {
        id: 1,
        name: 'Алла',
        rate: '5',
        title: 'Підготовка до ДПА',
        text: 'Викладач відподвідальний, пунктуальний. Заняттями задоволени.'
    },
    {
        id: 2,
        name: 'Людміла',
        rate: '5',
        title: 'Математика 7-9 клас',
        text: 'Репетитор сподобался. Має цикаву та эффективну методиіку викладання, доступно пояснює матеріал. Результати позітівни. Рекомменую.'
    },
    {
        id: 3,
        name: 'Мірослав',
        rate: '5',
        title: 'Підготовка до ЗНО',
        text: 'Співпрацюємо з Вадимом вже тривалий час, готуємось ґрунтовно до ЗНО. Я викладачем задоволений на 100%!'
    },
    {
        id: 4,
        name: 'Олена',
        rate: '5',
        title: 'Математика 10-11 класс',
        text: 'Гарний репетитор. Заняттями задоволена.'
    },
    {
        id: 5,
        name: 'Грігорій',
        rate: '5',
        title: 'Підготовка до ЗНО',
        text: 'Вадим Олексанрович гарний репетитор, швидко знайшов спільну мову, доступно пояснює, ми повністю задоволені його роботою.'
    },
    {
        id: 6,
        name: 'Наталья',
        rate: '5',
        title: 'Підготовка до ЗНО',
        text: 'Вадим Олексанрович чудовий репетитор, нам усе сподобалось.'
    },
]

let currentReview = undefined


const reviewList = document.querySelector('.review-list')

function generateReviews () {
    //alert('kejf')
    reviews.forEach(review => {
        const reviewCard = document.createElement('div')
        reviewCard.className = 'review-card'
        reviewCard.id = review.id
        const reviewAuthor = document.createElement('div')
        reviewAuthor.className = 'review-author'
        reviewAuthor.innerHTML = review.name
        const reviewTitle = document.createElement('div')
        reviewTitle.className = 'review-title'
        reviewTitle.innerHTML = review.title
        const reviewText = document.createElement('div')
        reviewText.className = 'review-text'
        reviewText.innerHTML = review.text

        reviewCard.append(reviewAuthor)
        reviewCard.append(reviewTitle)

        const rates = document.createElement('div')
        rates.className = 'rates'
        

        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i')
        star.className = 'fas fa-star'
            rates.append(star)
        }

        reviewCard.append(rates)

        reviewCard.append(reviewText)
        
        if (review.id !== 0 ) {
            reviewCard.className = 'review-card unvisible'
        } else {
            currentReview = reviewCard
            reviewCard.className = 'review-card visible'
        }
        reviewList.append(reviewCard)

    })

    console.log(currentReview.id)
} 


function moveRight() {
    const reviews = document.querySelectorAll('.review-card')
    let cardToHide = undefined
    if (currentReview.id == reviews.length - 1) {
        currentReview = reviews[0]
        cardToHide = document.getElementById(reviews.length - 1)
        console.log(currentReview.id)
    } else {
        currentReview = reviews[+currentReview.id + 1]
        console.log(currentReview.id)
        cardToHide = document.getElementById(currentReview.id - 1)
    }

   // const cardToHide = document.getElementById(currentReview.id - 1)
    cardToHide.className = 'review-card unvisible'

    const cardToShow = document.getElementById(currentReview.id)
    cardToShow.className = 'review-card visible'

}


function moveLeft() {
    const reviews = document.querySelectorAll('.review-card')
    let cardToHide = undefined
    if (currentReview.id == 0) {
        currentReview = reviews[reviews.length - 1]
        cardToHide = document.getElementById(0)
        console.log(currentReview.id)
    } else {
        currentReview = reviews[+currentReview.id - 1]
        console.log(currentReview.id)
        cardToHide = document.getElementById(+currentReview.id + 1)
    }

   // const cardToHide = document.getElementById(currentReview.id - 1)
    cardToHide.className = 'review-card unvisible'

    const cardToShow = document.getElementById(currentReview.id)
    cardToShow.className = 'review-card visible'

}

const rightArrow = document.querySelector('.fa-chevron-right')
rightArrow.addEventListener("click", moveRight)

const leftArrow = document.querySelector('.fa-chevron-left')
leftArrow.addEventListener("click", moveLeft)

window.onload = generateReviews