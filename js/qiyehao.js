
window.addEventListener('load', function () {
    function suiji(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    var data = [{
        xuhao: 0,
        srcs: 31,
        title1: '万达商业-老王',
        title1sub: '定个小目标哦',
        jianjie: '先挣他一个亿'
    }, {
        xuhao: 1,
        srcs: 32,
        title1: '京东-东子',
        title1sub: '我脸盲',
        jianjie: '我不知道奶茶妹好看不'
    }, {
        xuhao: 2,
        srcs: 33,
        title1: '阿里巴巴-小马哥',
        title1sub: '我不喜欢钱',
        jianjie: '我对钱没有兴趣'
    }]
    var qiyehaobtn = this.document.querySelectorAll('.qiyehaobtn')
    var qiyehaosub = this.document.querySelector('.qiyehaosub')
    qiyehaobtn.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            this.style.color = 'blue'
        })
        tim.addEventListener('mouseleave', function () {
            this.style.color = '#ccc'
        })
        tim.addEventListener('click', gengxinshuju)
    })

    gengxinshuju()
    function gengxinshuju() {
        var xuhaos = []
        var newarr = []
        for (var i = 0; i < data.length; i++) {
            while (true) {
                var index = suiji(data.length - 1, 0)
                if (newarr.indexOf(data[index]) === -1) {
                    newarr.push(data[index])
                    break
                }
            }
        }
        var newobj = { one: newarr }
        var str = template('qiyehaomuban', newobj)
        qiyehaosub.innerHTML = str
    }
})