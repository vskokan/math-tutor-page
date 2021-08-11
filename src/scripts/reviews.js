const reviews = [
    {   
        id: 0,
        name: 'Эльвира',
        rate: '5',
        title: 'Математика. Подготовка к ДПА. 9 класс',
        text: 'Преподавателем довольны, я и иербенок. Занятия проходят интересно и непринужденно. '
    },
    {
        id: 1,
        name: 'Алла',
        rate: '5',
        title: 'Математика, Подготовка к ДПА (ГИА) (9 класс)',
        text: 'Преподаватель отвнетственный, пунктуальный. Занятиями довольны'
    },
    {
        id: 2,
        name: 'Лдмила',
        rate: '5',
        title: 'Математика 7-9 класс',
        text: 'Репетитор понравился. Имеет интересную и эффективную методику преподавания, домтупно объясняет материал. Результаты положительные. Рекомменую.'
    },
    {
        id: 3,
        name: 'Мирослав',
        rate: '5',
        title: 'Математика, подготовка к ЗНО',
        text: 'Сотрудничаем с Вадимом уже длительное время, готовимся основательно к ЗНО. Я преподавателем доволен на 100%!'
    },
    {
        id: 4,
        name: 'Елена',
        rate: '5',
        title: 'Математика 10-11 класс',
        text: 'Хороший репетитор. Занятями довольна.'
    },
    {
        id: 5,
        name: 'Григорий',
        rate: '5',
        title: 'Математика, подготовка к ЗНО',
        text: 'Вадим Алексанрович хороштй репетитор, быстро нашел общий язык, доступно объясняет, мы полностью удовтелворены его работой.'
    },
    {
        id: 6,
        name: 'Наталья',
        rate: '5',
        title: 'Математика, подготовка к ЗНО',
        text: 'Вадим Алексанрович прекрасный репетитор, нам все понравилось.'
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