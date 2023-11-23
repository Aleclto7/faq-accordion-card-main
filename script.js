const btns = document.querySelectorAll('.element__btn')

for(let btn of btns) {
    btn.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('inactive')
        this.firstElementChild.classList.toggle('rotate')
        this.classList.toggle('focus')
    })
}