window.addEventListener('load', function () {
    var lunborights = document.querySelectorAll('.ClsN_Carousel-right-li')
    lunborights.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            tim.children[0].style.width = '150%'
            tim.children[0].style.height = '150%'
            tim.children[1].style.top = '50%'
            tim.children[2].style.opacity = '1'
        })
        tim.addEventListener('mouseleave', function () {
            tim.children[0].style.width = '100%'
            tim.children[0].style.height = '100%'
            tim.children[1].style.top = '80%'
            tim.children[2].style.opacity = '0'
        })
    })
})