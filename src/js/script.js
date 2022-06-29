const hamburger = document.querySelector('.burger');
const toggleMenu = document.querySelector('.header-nav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header-nav--opened');
    toggleMenu.classList.toggle('active');
});