//create a variable to store a reference to our button
let myButton = document.querySelector('button');

//step two: event handler, listens for click and triggers out function
myButton.onclick = alertFunction;

function alertFunction() {
  alert("The button was totally clicked");
}
