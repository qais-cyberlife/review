var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function addItem(event) {
event.preventDefault();

// selevt form element by its 'name; attr. and get its value

var shoppingItem = $('input[name="shopping-input').val();

// if there's nothing in the form entered, don't print to the page
if (!shoppingItem){
console.log('No shopping item filled out in form!'); 
return;
}

// Print to the page
shoppingListEl.append('<li>' + shoppingItem + '</li>');

// Clear the form input element
$('input[name="shopping-input"]').val('');
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', addItem);