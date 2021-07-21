const navbarToggle = document.querySelector('.navbar-toggle')
const menu = document.querySelector('.menu')

navbarToggle.addEventListener( 'click', () => {
    navbarToggle.classList.toggle('active');
    menu.classList.toggle('active');
})