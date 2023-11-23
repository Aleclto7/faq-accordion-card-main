const btns = document.querySelectorAll('.element__btn')

btns.forEach(element => {
    element.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('inactive')
        this.firstElementChild.classList.toggle('rotate')
        this.classList.toggle('focus')
    })
});