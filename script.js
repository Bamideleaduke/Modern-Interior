const toggleBTn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector("nav-items")

toggleBTn.addEventListener("click", mobileView);

function mobileView() {
    toggleBTn.classList.toggle("active");
    navMenu.classList.toggle("active")
};

const navLink = document.querySelector(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    toggleBTn.classList.remove("active");
    navMenu.classList.remove("active")
}