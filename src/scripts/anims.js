const animated = document.querySelectorAll('.animated')

if (animated.length > 0) {
    window.addEventListener('scroll', anim)
    function anim(params) {
        for (let index = 0; index < animated.length; index++) {
            const item = animated[index];
            const itemHeigth = item.offsetHeight;
            const itemOffset = offset(item).top;
            const animStart = 4;

            let itemPoint = window.innerHeight - itemHeigth / animStart;
            if (itemHeigth > window.innerHeight) {
                itemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > itemOffset - itemPoint) && scrollY < (itemOffset + itemHeigth)) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }

        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;

        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        anim();
    }, 300);
    
}