const header = document.querySelector("#header");

header.addEventListener("click", (event) => {
    const mobileMenu = header.querySelector("#menu");
    const burger = header.querySelector("#burger");
    const isBurger = event.target.closest("#burger");
    const isAnchorLink = event.target.closest("[data-anchor-link]");

    if (isBurger) {
        mobileMenu.classList.toggle("open");
        isBurger.classList.toggle("active");
    };

    if (isAnchorLink) {
        mobileMenu.classList.remove("open");
        burger.classList.remove("active");
    };
})