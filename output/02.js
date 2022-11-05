// Fetching product names and storing in array
let array = [];
document.querySelectorAll(".as-imagegrid-item").forEach((a) => array.push(a.innerText.replace("\nSupport", "")))
console.log(array);