// Hamburgarmeny

let menu_button = document.querySelector("#menu-button");
menu_button.addEventListener("click", toggleMenu);

let fade_layer = document.querySelector("#fade-layer");
fade_layer.addEventListener("click", toggleMenu);

function toggleMenu() {
    let menu = document.querySelector("#nav-menu");
    menu.classList.toggle("visible");

    let fade = document.querySelector("#fade-layer");
    fade.classList.toggle("visible");
}

// FAQ

let faq_items = document.querySelectorAll(".faq-item h3");

faq_items.forEach(function (faq_item) {
    faq_item.addEventListener("click", toggleAnswer);
})

console.log("testturwgugest");

function toggleAnswer() {
    this.parentElement.classList.toggle("open");
}