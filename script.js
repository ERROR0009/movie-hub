// Get the logo and search button elements
const logo = document.getElementById("home");
const searchButton = document.getElementById("searchButton");

// Add a click event listener to the logo
logo.addEventListener("click", function() {
  // Redirect to the home page
  window.location.href = "home.html";
});

// Add a click event listener to the search button
searchButton.addEventListener("click", function() {
  // Get the search input element
  const searchInput = document.getElementById("searchInput");
  // Get the value of the search input
  const searchText = searchInput.value;
  // Redirect to the search results page with the search text
  window.location.href = "search_results.html?query=" + encodeURIComponent(searchText);
});
