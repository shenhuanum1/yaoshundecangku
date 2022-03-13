window.addEventListener('load', function () {
    //总计数器
    var flag = 0
    //开闭锁
    var kaibi = true
    //定时器
    var timers1 = null
    //按钮隐藏显示
    var ClsN_Carousel = document.querySelector('.ClsN_Carousel')
    var leftbtn = document.querySelector('.leftbtn')
    var rightbtn = document.querySelector('.rightbtn')
    ClsN_Carousel.addEventListener('mouseover', function () {
        clearInterval(timers1)
        leftbtn.style.display = 'block'
        rightbtn.style.display = 'block'
    })
    ClsN_Carousel.addEventListener('mouseout', function () {
        leftbtn.style.display = 'none'
        rightbtn.style.display = 'none'
        clearInterval(timers1)
        timers1 = setInterval(function () {
            rightbtn.click()
        }, 2000)
    })
    //开启自动播放
    timers1 = setInterval(function () {
        rightbtn.click()
    }, 2000)
    //鼠标移入li图片变大
    var dalis = document.querySelectorAll('.ClsN_Carousel-1-li')
    dalis.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            tim.children[0].style.width = '150%'
            tim.children[0].style.height = '150%'
        })
        tim.addEventListener('mouseleave', function () {
            tim.children[0].style.width = '100%'
            tim.children[0].style.height = '100%'
        })
    })
    //获取下方小li
    var xiaolis = document.querySelectorAll('.bottomtiao-li')
    xiaolis.forEach(function (tim, i) {
        tim.index = i
    })
    //点击按钮图片轮播
    var ClsN_Carouselul = document.querySelector('.ClsN_Carousel-1')
    rightbtn.addEventListener('click', function () {

        if (kaibi) {
            kaibi = false
            flag++
            if (flag > 6) {
                ClsN_Carouselul.style.left = 0
                flag = 1
            }
            var jieshu = -ClsN_Carouselul.children[0].offsetWidth * flag
            donghua(ClsN_Carouselul, jieshu, function () {
                kaibi = true
            })
            xiaolibianse(flag)
        }

    })
    leftbtn.addEventListener('click', function () {
        if (kaibi) {
            kaibi = false
            flag--
            if (flag < 0) {
                console.log(flag);
                ClsN_Carouselul.style.left = -ClsN_Carouselul.children[0].offsetWidth * 6 + 'px'
                flag = 5
            }
            var jieshu = -ClsN_Carouselul.children[0].offsetWidth * flag
            console.log(jieshu);
            donghua(ClsN_Carouselul, jieshu, function () {
                kaibi = true
            })
            xiaolibianse(flag)
        }

    })
    //下方条条变色,当前缓变
    xiaolis[0].innerHTML = `<div class="bottomtiao-li-div"></div>`
    xiaolis[0].children[0].style.width = '30px'
    function xiaolibianse(parm) {
        if (parm > 5) parm = 0
        for (var i = 0; i < xiaolis.length; i++) {
            xiaolis[i].innerHTML = ''
            xiaolis[i].style.backgroundColor = '#ccc'
        }
        for (var i = 0; i < parm; i++) {
            xiaolis[i].style.backgroundColor = 'blue'
        }
        xiaolis[parm].innerHTML = `<div class="bottomtiao-li-div"></div>`
        setTimeout(function () {
            xiaolis[parm].children[0].style.width = '30px'
        }, 0)
    }
    //点击下方小li跳到指定位置
    xiaolis.forEach(function (tim, i) {
        tim.addEventListener('click', function () {
            var index = this.index
            flag = index
            var jieshu = -ClsN_Carouselul.children[0].offsetWidth * flag
            donghua(ClsN_Carouselul, jieshu)
            xiaolibianse(flag)
        })
    })
})