const btn1 = document.querySelector('#js__btn1')
const btn2 = document.querySelector('#js__btn2')
const btn3 = document.querySelector('#js__btn3')
const btn4 = document.querySelector('#js__btn4')
const btn5 = document.querySelector('#js__btn5')

function active () {
    this.nextElementSibling.classList.toggle('inactive')
    this.firstElementChild.classList.toggle('rotate')
    this.classList.toggle('focus')
}

btn1.addEventListener('click', active)
btn2.addEventListener('click', active)
btn3.addEventListener('click', active)
btn4.addEventListener('click', active)
btn5.addEventListener('click', active)