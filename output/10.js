// Changing bg color on mouseover

let btn = document.querySelector(".btn-cta-big");
let text = document.querySelector(".btn-cta-big .login-btn-text");

btn.addEventListener("mouseover", () => {
    text.style.background = "red";
})
btn.addEventListener("mouseout", () => {
    text.style.background = "transparent";
})