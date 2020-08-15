/**
 * Script to reflect the search query in the URL in the search bar.
 */
const urlParams = new URLSearchParams(window.location.search);
const searchTerm = urlParams.get('query');
document.getElementById("search-input").value = searchTerm;