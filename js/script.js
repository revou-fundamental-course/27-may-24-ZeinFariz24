// Javascript Created By Fariz Fadlilah
// 01-06-2024 | 03:17

// navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(this.scrollY > 50){
        // console.log('saya scroll');
        navbar.classList.remove('bg-light');
        navbar.classList.add('bg-dark');
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('bg-dark');
        navbar.classList.remove('navbar-scroll');
        navbar.classList.add('bg-light');
    }
});

const navToggler = document.querySelector('.navbar-toggle');
const menuToggled = document.querySelector('.navbar-menu');

menuToggled.addEventListener('click', () => {
    console.log('saya diklik');
})
// navbar

