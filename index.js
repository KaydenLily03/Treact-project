const stack = document.querySelector(".navbar__stack")
const mobileMenu = document.querySelector(".navbar__mobile-menu")
stack.addEventListener("click",()=> {mobileMenu.classList.toggle("active")})

const closeBtn = document.querySelector(".navbar__mobile-menu--close")
closeBtn.addEventListener("click" , () => {
  mobileMenu.classList.remove("active")}) 
