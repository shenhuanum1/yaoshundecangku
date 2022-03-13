window.addEventListener('load', function () {
    // 小图片缓动放大
    var lowerBodyLeftSonsubliimg = document.querySelectorAll('.lowerBodyLeftSon-sub-li-img')
    lowerBodyLeftSonsubliimg.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            this.children[0].style.width = '120%'
            this.children[0].style.height = '120%'
        })
        tim.addEventListener('mouseleave', function () {
            this.children[0].style.width = '100%'
            this.children[0].style.height = '100%'
        })
    })
    // 大li移动显示阴影
    var lowerBodyLeftSonsubli = this.document.querySelectorAll('.lowerBodyLeftSon-sub-li')
    lowerBodyLeftSonsubli.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            tim.style.boxShadow = '0px 0px 8px rgba(0,0,0,0.3)'
        })
        tim.addEventListener('mouseleave', function () {
            tim.style.boxShadow = 'none'
        })
    })
    //小图图移动变大,显示阴影
    var lowerBodyLeftSonSanhengLi = this.document.querySelectorAll('.lowerBodyLeftSonSanhengLi')
    var lowerBodyLeftSonSanhengLi1 = this.document.querySelectorAll('.lowerBodyLeftSonSanhengLi1')
    lowerBodyLeftSonSanhengLi1.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            this.children[0].style.width = '120%'
            this.children[0].style.height = '120%'
        })
        tim.addEventListener('mouseleave', function () {
            this.children[0].style.width = '100%'
            this.children[0].style.height = '100%'
        })
    })
    lowerBodyLeftSonSanhengLi.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            tim.style.boxShadow = '0px 0px 8px rgba(0,0,0,0.3)'
        })
        tim.addEventListener('mouseleave', function () {
            tim.style.boxShadow = 'none'
        })
    })
    //问题详情变色
    var lowerBodyLeftSonsublirightSub = this.document.querySelectorAll('.lowerBodyLeftSon-sub-li-rightSub')
    lowerBodyLeftSonsublirightSub.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            tim.style.color = '#4285f4'
        })
        tim.addEventListener('mouseleave', function () {
            tim.style.color = 'black'
        })
    })
})