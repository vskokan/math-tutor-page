//const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger')
let isMenuOpened = false

function showMenu () {
    const menu = document.querySelector('.menu')
    //alert('Вадюша пупсик')
    isMenuOpened = true
    menu.className = 'menu mobile-showed'
    menu.style.display = 'flex'
    burger.removeEventListener('click', showMenu)
    burger.addEventListener('click', closeMenu)
    transformBurger()
}

function closeMenu () {
    const menu = document.querySelector('.menu')
    menu.className = 'menu mobile-hidden'
    //menu.style.display = 'none'
    // setTimeout(() => {menu.style.display = 'none'}, 500)
    //menu.style.animation = 'show 0.7s 1 backwards cubic-bezier(0.075, 0.82, 0.165, 1) reverse'
    isMenuOpened = false
    burger.removeEventListener('click', closeMenu)
    burger.addEventListener('click', showMenu)
    transformBurger()
}

function transformBurger () {
    const blocks = document.querySelectorAll('.block')
    if (isMenuOpened) {
        
        blocks[1].style.visibility = 'hidden'
        blocks[0].style.transform = 'rotate(45deg)'
        blocks[0].style.position = 'absolute'
        blocks[2].style.position = 'absolute'
        blocks[2].style.transform = 'rotate(-45deg)'
        blocks[2].style.top = '0px'
    } else {
        blocks[1].style.visibility = 'visible'
        blocks[0].style.transform = ''
        blocks[2].style.transform = ''
        blocks[0].style.position = ''
        blocks[2].style.position = ''
    }
}

burger.addEventListener('click', showMenu)

