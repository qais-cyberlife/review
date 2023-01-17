// Selects the main DOM elements
var searchFormEl = $('#search-form')
var searchInputEl = $('#search-input');
var formatInputEl = $('#format-input');

// console.log(formEl);
// console.log(searchInputEl);
// console.log(formatInputEl);

function handleFormSubmit(event) {
  event.preventDefault();

  var search = searchInputEl.val();
  // console.log(search)

  var format = formatInputEl.val();
  // console.log(format)

  if (format) {
    redirectUrl = "./search-results.html?q=" + search + "&format=" + format;
  document.location.replace(redirectUrl);
  } else if (!search) {
  window.alert("Please enter a search query! :)")

}else {
  redirectUrl = "./search-results.html?q=" + search + "&format=";
  document.location.replace(redirectUrl);
}
}


searchFormEl.on('submit', handleFormSubmit);
