const BURGER = document.querySelector("#burger");
const mobileMenu = document.querySelector("#mobile-menu");
BURGER.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});