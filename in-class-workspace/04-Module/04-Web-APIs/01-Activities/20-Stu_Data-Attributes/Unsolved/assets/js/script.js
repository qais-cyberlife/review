var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;
  var number = element.getAttribute("data-number")

  // TODO: Complete function
  if (element.matches("div")) {
    var state = element.getAttribute("data-state");
    if (state === "hidden"){
      element.setAttribute("data-state", "block");
      element.textContent = number;
    } else if (state === "block") {
      element.setAttribute("data-state", "hidden");
        element.textContent = "";
      }
  }
});
