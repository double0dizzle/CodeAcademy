// Adding Event Handlers
// It's best practice to create named event handler functions, instead of anonymous functions. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:

// let eventHandlerFunction = function() {
//   // this block of code will run
// }

// eventTarget.onclick = eventHandlerFunction;
// The .addEventListener() method is another common syntax for registering event handlers. An event listener waits for a specific event to occur and calls a named event handler function to respond to it. This method requires two arguments:

// The event type as a string
// The event handler function
// Check out the syntax of an .addEventListener() method with a click event:

// eventTarget.addEventListener('click', eventHandlerFunction);
// You'll want to use the .addEventListener() method to allow multiple event handlers to be registered to a single event without changing its other event handlers.

// Instructions
// 1.
// Play around with the view and close elements to meet the Codecademy mascot, Margo. Margo is super happy you made it this far and she needs your help!

// Right now, the open function makes the margo and the close elements visible by changing their .display properties to 'block'. The hide function hides the same elements by assigning a 'none' value to the .display properties.

// Margo wants you to create a function that changes the text in the view element to 'Hello, World!'. Call this function textChange.

// 2.
// Next, you must create a function named textReturn that changes the text of the view variable back to the default.

// 3.
// Assign textChange as an event handler function to a click event fired on the view variable and run your code.

// 4.
// Assign textReturn as an event handler function to a click event fired on the close variable. Then run your code and fire the events!

let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let margo = document.getElementById('margo');

let open = function() {
  margo.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  margo.style.display = 'none';
  close.style.display = 'none';
};
let textChange = function () {
  view.innerHTML = "Hello World!";
}
let textReturn = function () {
  view.innerHTML = "View";
}

view.onclick = open;
close.onclick = hide;
view.addEventListener('click', textChange) ;
close.addEventListener('click', textReturn);