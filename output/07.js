// Searching CSS in MDN search bar

function search(searchCSS) {
    let input = document.querySelector(".search-input-field");
    input.value = searchCSS;
    let form = document.querySelector(".search-form");
    form.submit();
}

search("css selectors")