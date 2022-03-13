window.addEventListener('load', function () {
    //移动大li变色
    var OnTheLeftSideOfTheElevatorsubli = document.querySelectorAll('.ClsOnTheLeftSideOfTheElevator-sub-li')
    OnTheLeftSideOfTheElevatorsubli.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            tim.className = 'ClsOnTheLeftSideOfTheElevatorsublihover'
        })
        tim.addEventListener('mouseleave', function () {
            tim.className = 'ClsOnTheLeftSideOfTheElevator-sub-li'
        })
    })
    //点击三角旋转且下拉
    var ClsOnTheLeftSideOfTheElevatorsublikaiguankaibi = true
    var ClsOnTheLeftSideOfTheElevatorsublikaiguan = document.querySelector('.ClsOnTheLeftSideOfTheElevator-sub-li-kaiguan')
    var ClsOnTheLeftSideOfTheElevatorsubliul = document.querySelector('.ClsOnTheLeftSideOfTheElevator-sub-li-ul')
    ClsOnTheLeftSideOfTheElevatorsublikaiguan.addEventListener('click', function (e) {
        if (ClsOnTheLeftSideOfTheElevatorsublikaiguan) {
            ClsOnTheLeftSideOfTheElevatorsublikaiguan = false
            this.style.transform = 'rotate(180deg)'
            ClsOnTheLeftSideOfTheElevatorsubliul.style.height = '128px'
            return
        }
        ClsOnTheLeftSideOfTheElevatorsublikaiguan = true
        this.style.transform = 'rotate(0deg)'
        ClsOnTheLeftSideOfTheElevatorsubliul.style.height = '0px'
    })
    //下拉的元素移动变色
    var ClsOnTheLeftSideOfTheElevatorsubliulli = document.querySelectorAll('.ClsOnTheLeftSideOfTheElevator-sub-li-ul-li')
    ClsOnTheLeftSideOfTheElevatorsubliulli.forEach(function (tim) {
        tim.addEventListener('mouseenter', function () {
            this.style.color = '#4285f4'
        })
        tim.addEventListener('mouseleave', function () {
            this.style.color = '#ddd'
        })
    })
    //页面滚动定位方式改变
    var ClsPageBodyBox = document.querySelector('.ClsPageBodyBox').offsetTop
    var ClsOnTheLeftSideOfTheElevator = document.querySelector('.ClsOnTheLeftSideOfTheElevatorFather')
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > ClsPageBodyBox) {
            ClsOnTheLeftSideOfTheElevator.style.position = 'fixed'
        } else {
            ClsOnTheLeftSideOfTheElevator.style.position = 'absolute'
        }
    })
})