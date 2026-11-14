// Create a new HTML file and link a JavaScript file to it.
// Add a button element to the HTML file.
// Add an event listener to the button that displays an alert when the button is clicked.

// Can you make it so that this event listener only triggers the first time that the button is clicked and then never again?
// Add a link element to the HTML file that goes to your favorite website.
// Add an event listener to the link that prevents it from navigating to the website when you click it.
// Add more code to the event listener for the link that pops up an alert that says “No distractions! I’m coding!”

// The formula below was created organically

// const button = document.querySelector("button");

// button.addEventListener("click", buttonClick);

// function buttonClicks("adding1" countButtonClicks) {
// console.log("Button was clicked! Add one to the count");
//
// let button = document.querySelector("button");

// The formula below was created using the book only

// let button = document.querySelector("button");
// button.addEventListener("click", (event) => {
//   if (event.button == 0) {
//     console.log("Adding 1 to the Count");
//   }
// });

// the formula below was a copy from a youtube video
// const button = document.getElementById("button");
// const counterDisplay = document.getElementById("counter-display");
// let Counter = 0;

// button.addEventListener("click", increaseCounter);

// function increaseCounter() {
// Counter++;
// counterDisplay.innerText = Counter;

const button = document.getElementById("button");
const counterDisplay = document.getElementById("counter-display");
let counter = 0;

button.addEventListener("buttonclick", addingToTheCount);

function addingToTheCount() {
  counter++;
  counterDisplay.innerText = counter;
}
