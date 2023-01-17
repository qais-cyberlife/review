// Selects the main DOM elements
var searchFormEl = $('#search-form')
var searchInputEl = $('#search-input');
var formatInputEl = $('#format-input');

// console.log(formEl); Successful
// console.log(searchInputEl); Successful
// console.log(formatInputEl); Successful

function handleFormSubmit(event) {
  event.preventDefault();

  var search = searchInputEl.val().trim();
  // console.log(search) Successful

  var format = formatInputEl.val();
  // console.log(format) Successful

  if (!search) {
    window.alert("Please enter a search query! :)")

  } else if (format) {
  redirectUrl = "./search-results.html?q=" + search + "&format=" + format;
  // document.location.replace(redirectUrl);
  // console.log(format) Successful
  getData(search, format)
}else {
  redirectUrl = "./search-results.html?q=" + search + "&format=";
  // document.location.replace(redirectUrl);
  getData(search, "")
  // console.log(format) Successful
}
}

var getData = function (search, format){
  if (format) {
    var apiUrl = 'https://www.loc.gov/' + format + '/?q=' + search + '&fo=json';
  } else {
  var apiUrl = 'https://www.loc.gov/search/?q=' + search + '&fo=json';
}
// console.log(apiUrl) Successful
}

searchFormEl.on('submit', handleFormSubmit);
