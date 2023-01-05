var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// Creates an li for each todo item.
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // Sets the todo count to 0 and the ul to be empty as no todo item have been logged atm.
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // append the todo items lis to the ul and appends a complete button to each li
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
function init() {
  // TODO: What is the purpose of the following line of code?
  // gets the to do list items and converts them to a JSON Object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // of there are not stored todos then set the todo list to be empty?
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // renders the todo items
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // convert the todos JSON Object to a string
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// 
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // Ends the function if there is no text entered
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
//  pushes the input text to the todos array and resets the value of the todo input
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // The todo items will be stored and then rendered
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// adds an event lister to the to do list
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // removes the completed to do item and returns an array of yet to be completed todos
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // We will store new todos and render the available ones
    storeTodos();
    renderTodos();
  }
});

init();
