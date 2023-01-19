// Selects the main DOM elements
var searchFormEl = $('#search-form');
var searchInputEl = $('#search-input');
var formatInputEl = $('#format-input');
var searchQuery = $('#result-text');
var resultsEl = $('#result-content');

console.log(searchInputEl.val())
var getQueryName = function () {

  // if (!searchQuery) {


    var queryString = document.location.search;
  var searchParamsArr = queryString.split('&');

  var queryName = searchParamsArr[0].split('=').pop();
  var format = searchParamsArr[1].split('=').pop();
  var queryNum = searchParamsArr[2].split('=').pop();

  searchQuery.text(queryName);
  console.log(queryName);
  console.log(format);
  console.log(queryNum)
  // } else {
    queryName = searchInputEl.val();
    format = formatInputEl.val(); 
  // }

    getData(queryName, format, queryNum);
  
};

function getData(queryName, format, queryNum) {
if (!format) {
  var apiUrl = 'https://www.loc.gov/search/?q=' + queryName + '&c=' + queryNum + '&fo=json';
} else {
  var apiUrl = 'https://www.loc.gov/' + format + '/?q=' + queryName + '&c=' + queryNum + '&fo=json';
}

fetch(apiUrl).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      displayData(data)
    })  
  }
});
};

function displayData(data) {
if (data.length === 0) {
  resultsEl.text('There are no results for that query!')
  return;
}

for (var i =0; i< data.results.length; i++) {

 var cardEl = $('<div>'); 
 cardEl.addClass('card bg-light text-dark mb-3 p-3')

 var cardBody = $('<div>');
 cardBody.addClass('card-body');

 var cardTitle = $('<h2>')
 .text(data.results[i].title);
 
 var cardDate = $('<h3>')
 .text("Date: " + data.content.results[i].date);

 var cardSubject = $('<h3>')
 .text("Subject: " + data.content.results[i].subject);

 var cardDescription = $('<h3>')
 .text("Description: " + data.content.results[i].description);

 var cardBtn = $('<a>')
 .text("Read More")
 .attr('href',data.content.results[i].id )
 .addClass('btn btn-dark');

 cardBody
 .append(
  cardTitle,
  cardDate,
  cardSubject,
  cardDescription,
  cardBtn  
  );
 cardEl.append(cardBody);
 resultsEl.append(cardEl);
} 
};

getQueryName();