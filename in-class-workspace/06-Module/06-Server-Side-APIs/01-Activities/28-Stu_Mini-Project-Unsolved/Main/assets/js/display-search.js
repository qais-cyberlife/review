 // Continue on line 52!!
// Selects the main DOM elements
var searchFormEl = $('#search-form');
var searchInputEl = $('#search-input');
var formatInputEl = $('#format-input');
var searchQuery = $('#result-text');
var resultsEl = $('#result-content');

var getQueryName = function () {
  var queryString = document.location.search;
  var searchParamsArr = queryString.split('&');

  var queryName = searchParamsArr[0].split('=').pop();
  var format = searchParamsArr[1].split('=').pop();

  searchQuery.text(queryName);
  console.log(queryName);
  console.log(format);
 

    getData(queryName, format);
  
};

function getData(queryName, format) {
if (!format) {
  var apiUrl = 'https://www.loc.gov/search/?q=' + queryName + '&fo=json';
} else {
  var apiUrl = 'https://www.loc.gov/' + format + '/?q=' + queryName + '&fo=json';
}

fetch(apiUrl).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      displayData(data)
      // console.log(data); Success
      // console.log(typeof data); Success // Object
    })  
  }
});

// console.log(apiUrl); Success
};

function displayData(object) {
if (object.length === 0) {
  resultsEl.text('There are no results for that query!')
  return;
}

// for (var i =0; i<object.lenth; i++) {
//   var
// } // Continue here!!!!

};

getQueryName();

// Gets the parameters from the URL

// function getParams {

// }