let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let mountains_behind = document.querySelector('#mountains_behind')
let text = document.querySelector('#text')
let btn = document.querySelector('#btn')
let mountains_front = document.querySelector('#mountains_front')
let header = document.querySelector('header')
let type = document.querySelector('.typing')


window.onscroll = () => {
    let val = window.scrollY
    
    // stars.style.left = val + "px"
    stars.style.bottom = val + "px"
    moon.style.top = val * 0.75 + "px"
    mountains_behind.style.top = val * 0.5 + 'px'
    text.style.marginRight = val + 'px'
    text.style.marginTop = val * 0.5 + 'px'
    mountains_front.style.bottom = val * 0.5 +'px'
    btn.style.top = val * 0.5 + 'px'
    header.style.top = val * 0.5 + 'px'
    type.style.animation = 'type 5s steps(50, end) 1;'

}


