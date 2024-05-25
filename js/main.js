const burgerButton = document.querySelector(".header__burger")
const navList = document.querySelector(".header__menu")
const html = document.querySelector("html")

burgerButton.addEventListener("click", open)

function open(){
  navList.classList.toggle("active-menu")
  burgerButton.classList.toggle('active')
  html.classList.toggle("unscroll")
}

/* ======================================================================================  */

const anchors = document.querySelectorAll('[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault()

        const blockID = anchor.getAttribute("href").substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})

/* ======================================================================================  */

navList.querySelectorAll(".header__menu-link").forEach(link => {
  link.addEventListener("click", () => {
    burgerButton.classList.remove("active")
    navList.classList.remove("active-menu")
    html.classList.remove("unscroll")
  })
})


/* =========================================================================================  */

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
});


/* ===========================================================================================  */

const scrollRevealOptins = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal(".header__title", {
  ...scrollRevealOptins,
})

ScrollReveal().reveal(".header__text", {
  ...scrollRevealOptins,
  delay: 500,
})

ScrollReveal().reveal(".header__price", {
  ...scrollRevealOptins,
  delay: 1000,
})

ScrollReveal().reveal(".header__buttons", {
  ...scrollRevealOptins,
  delay: 1500,
})

ScrollReveal().reveal(".header__img", {
  ...scrollRevealOptins,
  origin: "right",
})

ScrollReveal().reveal(".story__content-top", {
  ...scrollRevealOptins,
  delay: 500,
})

ScrollReveal().reveal(".story__content-title", {
  ...scrollRevealOptins,
  delay: 1000,
})

ScrollReveal().reveal(".story__content-text", {
  ...scrollRevealOptins,
  delay: 1500,
})

ScrollReveal().reveal(".story__content-button", {
  ...scrollRevealOptins,
  delay: 2000,
})

ScrollReveal().reveal(".story__img",  {
  ...scrollRevealOptins,
  origin: "left",
})

ScrollReveal().reveal(".skills__img",  {
  ...scrollRevealOptins,
  origin: "right",
})