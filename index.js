const menuIcon = document.querySelector('.menu-icon')
const navLinks = document.querySelector('.nav-links')
const navLi = document.querySelector('.nav-li')




menuIcon.addEventListener('click', ()=>{
    navLinks.classList.toggle('show-nav')
})

navLi.addEventListener('click', ()=>{
    navLinks.classList.remove('show-nav')
})