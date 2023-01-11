// save reference to important DOM elements
// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');


// handle displaying the time
var today = moment();
timeDisplayEl.text(today.format("MMMM DDDo YYYY hh:mm:ss A z"))
// handle printing project data to the page

// You can also chain methods onto new lines to keep code clean

// By listing each `<td>` variable as an argument, each one will be appended in that order

// handle project form submission
dueDateInputEl.datepicker({ minDate: 1 });
$('#project-modal').modal(options)
