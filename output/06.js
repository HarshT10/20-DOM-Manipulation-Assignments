// BG color change on mouse over

let search = document.querySelector(".searchinput___zXLAR");

search.addEventListener("mouseenter", red);
search.addEventListener("mouseout", white);

function red() {
  search.style.background = "red";
}
function white() {
  search.style.background = "white";
}