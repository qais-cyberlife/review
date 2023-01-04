var keyPressed = document.querySelector("#key");
var keyCode = document.querySelector("#code");
var eventStatus = document.querySelector("#status")



function keydownAction(event) {
  // TODO: Complete keydown function
  keyPressed.textContent = `${event.key}`;
  keyCode.textContent = `${event.code}`
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction)