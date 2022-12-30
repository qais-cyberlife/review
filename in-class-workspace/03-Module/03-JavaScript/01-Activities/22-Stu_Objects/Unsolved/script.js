//WRITE YOUR CODE BELOW
 var customerOrder = {
    name: "Black Tea",
    sugars: 3, 
    ready: true,
 }

 console.log("The customer ordered a " + customerOrder.name + " with " + customerOrder.sugars + " sugars.")

 if (customerOrder.ready) {
    console.log("Ready for pick-up")
 } else {
    console.log("Still in order queue")
 }