const burger = document.querySelector('.burger')
const menuLinks = document.querySelectorAll('.menu-link')
let isMenuOpened = false

function showMenu () {
    const menu = document.querySelector('.menu')
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
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu)
})
