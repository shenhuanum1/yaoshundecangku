window.addEventListener('load', function () {
    var hourshotbtmliimg = this.document.querySelectorAll('.hourshotbtmliimg')
    hourshotbtmliimg.forEach(function (tim) {
        huaguobianda(tim, 0)
    })
    var hourshotbtmliimgindex = this.document.querySelectorAll('.hourshotbtmliimgindex')
    hourshotbtmliimgindex.forEach(function (tim, i) {
        var y = - 387 - 33 * i + 'px'
        tim.style.backgroundPosition = '-6px ' + y
    })
    var hourshotbtmlip1 = this.document.querySelectorAll('.hourshotbtmlip1')
    hourshotbtmlip1.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            tim.style.color = 'blue'
        })
        tim.addEventListener('mouseleave', function () {
            tim.style.color = '#000'
        })
    })
})