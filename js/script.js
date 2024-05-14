let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

function clock(){
    let time = new Date();
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    hours.innerHTML = hour
    minutes.innerHTML = min

    if(min < 10){
        minutes.innerHTML = "0" + min
    }else{
        minutes.innerHTML = min
    }

    if(hour < 10){
        hours.innerHTML = "0"+hour
    }else{
        hours.innerHTML = hour
    }

    s.style.transform = `rotate(${sec*6}deg)`
    m.style.transform = `rotate(${min*6}deg)`
    h.style.transform = `rotate(${hour*30}deg)`

    setTimeout(() => {
        clock()
    }, 1000);

}

clock()


let tabsItem = [...document.querySelectorAll('.tabsItem')];
let tabsContentItem = [...document.querySelectorAll('.tabsContentItem')]

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function(){
        for (let k = 0; k < tabsContentItem.length; k++) {
            tabsContentItem[k].classList.remove('active')    
            tabsItem[k].classList.remove('active')            
        }
        tabsContentItem[i].classList.add('active')    
        tabsItem[i].classList.add('active')

    })    
}

let stopwatchBtn = document.querySelector('.stopwatch__btn')
let stopwatchHours = document.querySelector('.stopwatch__hours')
let stopwatchMinutes = document.querySelector('.stopwatch__minutes')
let stopwatchSeconds = document.querySelector('.stopwatch__seconds')
let tabsLinkSpan = document.querySelector('.tabsLink__span')
let mSecund = 0
let secund = 0
let minut = 0
let Hour = 0
let timer
stopwatchBtn.addEventListener('click', function(){
    if(stopwatchBtn.innerHTML == "start"){
        stopwatchBtn.innerHTML = "stop"
        timer = setInterval(() => {
            mSecund++
            stopwatchSeconds.innerHTML = mSecund%100
            if(mSecund==100){
                secund++
                stopwatchMinutes.innerHTML = secund%60
                mSecund=0
            }

            if(secund==60){
                minut++
                stopwatchHours.innerHTML = minut
                secund=0
            }
            
        }, 10);
        tabsLinkSpan.classList.add('active')
    }else if(stopwatchBtn.innerHTML == "stop"){
        stopwatchBtn.innerHTML = "clear"
        clearInterval(timer)
        tabsLinkSpan.classList.remove('active')
        tabsLinkSpan.classList.add('active_clear')
    }else if(stopwatchBtn.innerHTML == "clear"){
        tabsLinkSpan.classList.remove('active_clear')
        stopwatchBtn.innerHTML = "start"
        mSecund=0
        secund=0
        minut=0
        stopwatchSeconds.innerHTML = mSecund
        stopwatchMinutes.innerHTML = secund
        stopwatchHours.innerHTML = minut
    }
})

