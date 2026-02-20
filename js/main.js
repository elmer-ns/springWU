let button = document.querySelector(".menu-button");
button.addEventListener("click", toggleMenu);

let fade_layer = document.querySelector(".fade-layer");
fade_layer.addEventListener("click", toggleMenu);

function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("visible");

    let fade = document.querySelector(".fade-layer");
    fade.classList.toggle("visible");
}