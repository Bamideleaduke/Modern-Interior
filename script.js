const toggleBTn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector(".nav-items")
const collapse = document.querySelector(".collapsible")
const closeBtn =document.querySelector(".close")


toggleBTn.addEventListener("click", () => {
    collapse.classList.toggle("hide");
});

closeBtn.addEventListener("click", () => {
    collapse.classList.toggle("hide");
});





const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    collapse.classList.toggle("hide");
    // collapse.classList.toggle("hide");
}