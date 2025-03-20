"use strict";
const header = document.querySelector("#header");
document.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
});
