function donghua(obj, jieshu, callback) {
    var timer = setInterval(function () {
        if (obj.offsetLeft === jieshu) {
            clearInterval(timer)
            callback && callback()
        }
        var buchang = (jieshu - obj.offsetLeft) / 10
        buchang = buchang > 0 ? Math.ceil(buchang) : Math.floor(buchang)
        obj.style.left = obj.offsetLeft + buchang + 'px'
    }, 10)
}
function fandingbu(obj, jieshu, callback) {
    var timer = setInterval(function () {
        var buchang = (jieshu - window.pageYOffset) / 10
        buchang = buchang > 0 ? Math.ceil(buchang) : Math.floor(buchang)
        if (window.pageYOffset === jieshu) {
            clearInterval(timer)
            callback && callback()
        }
        window.scroll(0, window.pageYOffset + buchang)
    }, 10)
}