window.addEventListener('load', function () {
    // 最新快讯模块字体变色及按钮变色
    var lowerBodyRightgrade2boxTitlesubingritLititle = this.document.querySelectorAll('.lowerBodyRightgrade2boxTitle-subing-ritLi-title')
    lowerBodyRightgrade2boxTitlesubingritLititle.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            tim.style.color = '#4285f4'
        })
        tim.addEventListener('mouseleave', function () {
            tim.style.color = 'black'
        })
    })
    var lowerBodyRightgrade2boxTitlesubingserch = this.document.querySelectorAll('.lowerBodyRightgrade2boxTitle-subing-serch')
    lowerBodyRightgrade2boxTitlesubingserch.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#4285f4'
            this.style.color = '#fff'
        })
        tim.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '#fff'
            this.style.color = '#4285f4'
        })
    })

})