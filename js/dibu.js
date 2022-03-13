window.addEventListener('load', function () {
    var btmserchduo = this.document.querySelector('.btmserchduo')
    btmserchduo.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#4285f4'
        this.style.color = '#fff'
    })
    btmserchduo.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#fff'
        this.style.color = '#4285f4'
    })
    //右侧电梯
    var pn1 = this.document.querySelector('.pn1')
    pn1.addEventListener('mouseenter', function () {
        pn1.innerHTML = '意见反馈'
        pn1.classList.remove('pn1')
        pn1.classList.add('pn1hover')
    })
    pn1.addEventListener('mouseleave', function () {
        pn1.innerHTML = ''
        pn1.classList.add('pn1')
        pn1.classList.remove('pn1hover')
    })
    var pn2 = this.document.querySelector('.pn2')
    var rightElevatorSubItemDiv = this.document.querySelector('.rightElevatorSubItemDiv')
    var youdiantiflag = true
    var youdiantijishu = -15
    var youdiantitouming = 0
    var youdiantitimer = null
    pn2.addEventListener('mouseenter', function () {
        if (youdiantiflag) {
            youdiantiflag = false
            pn2.classList.remove('pn2')
            pn2.classList.add('pn2hover')
            rightElevatorSubItemDiv.style.display = 'block'
            youdiantitimer = setInterval(function () {
                youdiantijishu--
                youdiantitouming = youdiantitouming + 0.1
                if (youdiantijishu < -30) {
                    clearInterval(youdiantitimer)
                    youdiantiflag = true
                }
                rightElevatorSubItemDiv.style.opacity = youdiantitouming
                rightElevatorSubItemDiv.style.top = youdiantijishu + 'px'
            }, 5)
        }

    })
    pn2.addEventListener('mouseleave', function () {
        if (youdiantiflag) {
            youdiantiflag = false
            pn2.classList.add('pn2')
            pn2.classList.remove('pn2hover')
            youdiantitimer = setInterval(function () {
                youdiantijishu++
                youdiantitouming = youdiantitouming - 0.1
                if (youdiantijishu > -15) {
                    clearInterval(youdiantitimer)
                    rightElevatorSubItemDiv.style.display = 'none'
                    youdiantiflag = true
                }
                rightElevatorSubItemDiv.style.opacity = youdiantitouming
                rightElevatorSubItemDiv.style.top = youdiantijishu + 'px'
            }, 5)
        }
    })
    var pn4 = this.document.querySelector('.pn4')
    pn4.addEventListener('click', function () {
        fandingbu(window, 0)
    })
})