var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
var items = [];

$.each(shoppingListEl, function () {
var itemEl = $('input[name="shopping-input"]');
li = $('<li>');
li.append(itemsEl)
}
)




// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', addShoppingItem);