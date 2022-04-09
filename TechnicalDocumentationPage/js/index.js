"use strict";
const nav = document.getElementById("nav");
const iconMenu = document.querySelector(".navbar__icon");

document.addEventListener("click", e => {
  console.log(e.target)
  e.target === iconMenu
    ? nav.classList.toggle("isActive")
    : nav.classList.remove("isActive");
});
