// Assemble: Create/select DOM elements
var rootEl = $('#root');
var rowEl = $(rootEl).children('ul');
var boxEl = $(rowEl).children('li');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children().children().css('background-color', 'white');

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

rootEl.children('ul').children('li').eq(6).text("O");
rootEl.children('ul').children('li').eq(0).text("O");