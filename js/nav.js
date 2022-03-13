window.addEventListener('load', function () {
    //经过一级导航效果
    var ClsFirstLevelNavigationList = this.document.querySelectorAll('.ClsFirstLevelNavigationList')
    ClsFirstLevelNavigationList.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#4285f4'
            erjidaohangenter(tim.children[1])
        })
        tim.addEventListener('mouseleave', function () {
            this.style.backgroundColor = ''
            erjidaohangleave(this.children[1])
        })
    })
    //二级导航经过动画
    function erjidaohangenter(obj) {
        obj.style.display = 'block'
        // setTimeout(function () {
        obj.style.opacity = '1'
        obj.style.height = '200px'
        for (var i = 0; i < obj.children.length; i++) {
            obj.children[i].style.height = '40px'
        }
        // }, 0)
    }
    //二级导航离开动画
    function erjidaohangleave(obj) {
        obj.style.opacity = '0'
        obj.style.height = '0px'
        for (var i = 0; i < obj.children.length; i++) {
            obj.children[i].style.height = '0px'
        }
        // setTimeout(function () {
        //     obj.style.display = 'none'
        // }, 500)
    }
    //点击登录显示模态框，以及拖动，以及内部逻辑
    //获取登录
    var register = document.querySelector('#register')
    //获取模态框
    var dengluyemian = document.querySelector('.dengluyemian')
    //获取遮罩层
    var zhezhaoceng = document.querySelector('.zhezhaoceng')
    //点击登录遮罩层显示
    register.addEventListener('click', function () {
        dengluyemian.style.display = 'block'
        zhezhaoceng.style.display = 'block'
        setTimeout(() => {
            dengluyemian.style.opacity = 1
            zhezhaoceng.style.opacity = 0.3
        }, 300);
    })
    //模态拖动
    dengluyemian.addEventListener('mousedown', function (e) {
        e.stopPropagation()
        dengluyemian.style.transition = '0s'
        var heneix = e.pageX - this.offsetLeft
        var heneiy = e.pageY - this.offsetTop
        document.addEventListener('mousemove', yidong)
        function yidong(e) {
            e.stopPropagation()
            var hengzuobiaox = e.pageX - heneix + 'px'
            var hengzuobiaoy = e.pageY - heneiy + 'px'
            dengluyemian.style.left = hengzuobiaox
            dengluyemian.style.top = hengzuobiaoy
        }
        document.addEventListener('mouseup', function () {
            e.stopPropagation()
            document.removeEventListener('mousemove', yidong)
            dengluyemian.style.transition = '0.3s'
        })
    })
    //手机区号显示,以及变色
    var shoujihaoxuanze = document.querySelector('.shoujihaoxuanze')
    var flag = true
    shoujihaoxuanze.addEventListener('click', function (e) {
        if (flag) {
            flag = false
            this.children[1].style.display = 'block'
            this.children[0].children[1].style.transform = 'rotate(225deg)'
        } else {
            flag = true
            this.children[1].style.display = 'none'
            this.children[0].children[1].style.transform = 'rotate(45deg)'
        }
        if (e.target.nodeName === 'LI') {
            var val = e.target.innerHTML.substr(6, 2)
            this.children[0].children[0].innerHTML = val
            console.log(val);
        }
    })
    shoujihaoxuanze.addEventListener('mouseover', function (e) {
        if (e.target.nodeName === 'LI') {
            e.target.style.color = 'black'
        }
    })
    shoujihaoxuanze.addEventListener('mouseout', function (e) {
        if (e.target.nodeName === 'LI') {
            e.target.style.color = '#ccc'
        }
    })
    //手机框验证手机号
    var yanzheng = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
    var shoujikuang = document.querySelector('.shoujikuang')
    var yanzhengmadui = document.querySelector('.yanzhengmadui')
    var cuowutishi = document.querySelector('.cuowutishi')
    shoujikuang.addEventListener('keyup', function () {
        if (yanzheng.test(this.value)) {
            yanzhengmadui.className = 'yanzhengmadui'
        } else {
            yanzhengmadui.className = 'yanzhengmacuo'
        }
    })
    shoujikuang.addEventListener('blur', function () {
        if (yanzheng.test(this.value)) {
            cuowutishi.style.display = 'none'
        } else {
            cuowutishi.style.display = 'block'
        }
    })
    var timer = null
    yanzhengmadui.addEventListener('click', function () {

        this.disabled = true
        var that = this
        var daojishi30s = 3
        timer = setInterval(() => {
            daojishi30s--
            if (daojishi30s < 0) {
                clearInterval(timer)
                that.innerHTML = '获取验证码'
                that.disabled = false
                this.className = 'yanzhengmadui'
            } else {
                this.className = 'yanzhengmacuo'
                that.innerHTML = daojishi30s + '秒后获取'
            }
        }, 1000);
    })
    //移动图标变色
    var weixintoubiao = document.querySelector('.weixintoubiao')
    var xinlangtoubiao = document.querySelector('.xinlangtoubiao')
    weixintoubiao.addEventListener('mouseenter', function () {
        this.className = 'weixintoubiaohover'
    })
    weixintoubiao.addEventListener('mouseleave', function () {
        this.className = 'weixintoubiao'
    })
    xinlangtoubiao.addEventListener('mouseenter', function () {
        this.className = 'xinlangtoubiaohover'
    })
    xinlangtoubiao.addEventListener('mouseleave', function () {
        this.className = 'xinlangtoubiao'
    })
    //关闭模态框,以及遮罩层
    var guanbi = document.querySelector('.guanbi')
    guanbi.addEventListener('click', function (e) {
        e.stopPropagation()
        dengluyemian.style.opacity = '0'
        zhezhaoceng.style.opacity = '0'
        setTimeout(() => {
            dengluyemian.style.display = 'none'
            zhezhaoceng.style.display = 'none'
        }, 300);
    })
    //导航栏滚动渐渐消失，透明渐变
    var ClsThePrimaryNavigation = document.querySelector('.ClsThePrimaryNavigation')
    document.addEventListener('scroll', function (e) {
        //得到偏移量
        var offset = window.pageYOffset < ClsThePrimaryNavigation.offsetHeight ? window.pageYOffset : ClsThePrimaryNavigation.offsetHeight
        //得到透明度
        var toumingdu = 1 - (window.pageYOffset / ClsThePrimaryNavigation.offsetHeight)
        toumingdu = toumingdu > 1 ? 1 : toumingdu
        ClsThePrimaryNavigation.style.opacity = toumingdu
        ClsThePrimaryNavigation.style.top = -offset + 'px'
    })
})