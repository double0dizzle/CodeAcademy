// Event Types
// Beyond the click event, there are all types of DOM events that can fire in a browser! It's important to know most events in the DOM take place without being noticed because there are no event handlers connected to them.

// It's also important to know some registered events don't depend on user interactions to fire. For instance, the load event fires after website files completely load in the browser.

// Browsers can fire many other events without a user — you can check out a list of events on the MDN Events Reference page.

// Many events need user interaction with the DOM to fire. One user interaction event you've become familiar with is the click event. A click event fires when the user presses and releases a mouse button on an element in the DOM.

// Click Event Image

// In the rest of this lesson, you'll explore more user interaction event types like the mouse and keyboard events. To explore more event types, check out the MDN Events Reference.

// Instructions
// 1.
// We made a really cool color generator to help people find different colors — try it out! Uh oh, it seems to be broken. We need you to use your new knowledge to fix the website.

// Complete the colorChange function to randomly change the colors of the buttons when specific events are fired on them. First, add the following variable to the event handler function: let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';

// The randomColor variable should be the first statement inside your function.

// 2.
// Add a statement that changes the background color of the event target and set it equal to randomColor.

// 3.
// There are two elements that should change color on this web page. First, create an event handler property on the button element that fires when it's clicked. Use colorChange as the event handler function.

// Then run your code and fire the click event.

// 4.
// Next, create an event handler property using the mysteryButton element as the target and assign it to the same event handler function.

// This property needs an event that fires when you rotate the mouse wheel or slide down on the mousepad. Use the MDN Events Reference page to find the correct event type. Then run your code and fire the event.

// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function() {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
}
button.onclick = colorChange;
mysteryButton.onwheel = colorChange;