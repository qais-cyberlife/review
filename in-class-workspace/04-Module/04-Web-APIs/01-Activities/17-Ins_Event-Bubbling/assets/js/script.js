var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

function changePurple(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: purple"
  );
}

function changeOrange(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: orange; color: white;"
  );
}

function changeBlue(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}

outer.addEventListener("click", changePurple);
inner.addEventListener("click", changeOrange);
button.addEventListener("click", changeBlue);
