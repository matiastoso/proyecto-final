// nav
const navBtn = document.querySelector('.menu__btn');
navBtn.addEventListener('click', function() {
    const menu = document.querySelector('.menu__btn');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('open');
    nav.classList.toggle('nav-active')
})