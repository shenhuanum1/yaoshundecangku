window.addEventListener('load', function () {
    var zaoqilunboflag = 0
    var zaoqilunbokaibi = true
    //左右按钮点击轮播
    var zaoqilunboleftbtn = this.document.querySelector('.selectedProjectsbtnright')
    var zaoqilunborightbtn = this.document.querySelector('.selectedProjectsbtnleft')
    var zaoqilunbosub = this.document.querySelector('.selectedProjectssubul')
    zaoqilunborightbtn.addEventListener('click', function () {
        if (zaoqilunbokaibi) {
            zaoqilunbokaibi = false
            zaoqilunboflag++
            if (zaoqilunboflag > 2) {
                zaoqilunbosub.style.left = 0
                zaoqilunboflag = 1
            }
            var tingzhi = -zaoqilunbosub.children[0].offsetWidth * zaoqilunboflag
            donghua(zaoqilunbosub, tingzhi, function () {
                zaoqilunbokaibi = true
            })
        }

    })
    zaoqilunboleftbtn.addEventListener('click', function () {
        if (zaoqilunbokaibi) {
            zaoqilunbokaibi = false
            zaoqilunboflag--
            if (zaoqilunboflag < 0) {
                zaoqilunbosub.style.left = -zaoqilunbosub.children[0].offsetWidth * 2 + 'px'
                zaoqilunboflag = 1
            }
            var tingzhi = -zaoqilunbosub.children[0].offsetWidth * zaoqilunboflag
            donghua(zaoqilunbosub, tingzhi, function () {
                zaoqilunbokaibi = true
            })
        }
    })
})