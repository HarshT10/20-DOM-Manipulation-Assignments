// Add one more FAQ Section 

let faq = document.querySelector(".article .accordion-homepage");

let section = document.createElement("section");
section.className = "parent";
section.appendChild(document.createElement("h3"));
section.querySelector("h3").textContent = "My New FAQ"

faq.appendChild(section)
