window.addEventListener('load', function () {
    //变色，变大
    var themesublitopp1 = this.document.querySelectorAll('.themesublitopp1')
    var themesublip1 = this.document.querySelectorAll('.themesublip1')
    themesublitopp1.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            this.style.color = 'blue'
        })
        tim.addEventListener('mouseleave', function () {
            this.style.color = '#000'
        })
    })
    themesublip1.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            this.style.color = 'blue'
        })
        tim.addEventListener('mouseleave', function () {
            this.style.color = '#787878'
        })
    })
    var themesublitopimg = this.document.querySelectorAll('.themesublitopimg')
    themesublitopimg.forEach(function (tim) {
        huaguobianda(tim, 0)
    })
    //滚动变位置
    var themeFather = this.document.querySelector('.themeFather')
    var themeFatheroffsettop = themeFather.offsetTop + 24
    var pn4 = this.document.querySelector('.pn4')
    console.log(themeFatheroffsettop);
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > themeFatheroffsettop) {
            themeFather.className = 'themeFather2'
            pn4.style.display = 'block'
        } else {
            themeFather.className = 'themeFather'
            pn4.style.display = 'none'
        }
    })
})