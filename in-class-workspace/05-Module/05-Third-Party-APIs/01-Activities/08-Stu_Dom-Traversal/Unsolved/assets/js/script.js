// Assemble: Create/select DOM elements
var rootEl = $('#root');


// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children('ul').children().css('background-color', 'white');

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

var row3 = rootEl.children('ul').eq(2);
row3.children().eq(0).text('O');