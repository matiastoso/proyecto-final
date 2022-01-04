// nav
const navBtn = document.querySelector('.menu__btn');
navBtn.addEventListener('click', function() {
    const menu = document.querySelector('.menu__btn');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('open');
    nav.classList.toggle('nav-active')
})

// efecto escritura
const typed  = new Typed('.typed', {
    strings: ['tu negocio', 'hacer crecer tu marca', 'aumentar las ventas', 'exponer tu arte'],
    typeSpeed: 40,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 800,
    loop: true,
    loopCount: false,
})