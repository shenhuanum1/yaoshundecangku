window.addEventListener('load', function () {
    //划过推荐直播变大
    var jianzhisubtop = this.document.querySelector('.jianzhisubtop')
    huaguobianda(jianzhisubtop, 1)
    //划过字体变色
    var jianzhisubbtmp1 = this.document.querySelector('.jianzhisubbtmp1')
    jianzhisubbtmp1.addEventListener('mouseenter', function () {
        this.style.color = '#4285f4'
    })
    jianzhisubbtmp1.addEventListener('mouseleave', function () {
        this.style.color = '#000'
    })
})