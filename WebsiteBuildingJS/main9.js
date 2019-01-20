// Event Handler Registration
// You're doing great! Now it's time to dive into using event handler functions to create interactivity.

// JavaScript interprets registered events as event objects with properties and methods. When you create an event handler function on a specific event, you create a property of the event object.

// An event handler function is registered as a property attached to the DOM element being interacted with, or the event target. Check out the syntax:

// let eventTarget = document.getElementById('targetElement');

// eventTarget.onclick = function() {
//   // this block of code will run
// }
// Let's break this down!

// First, we accessed the DOM element that serves as the event target by its ID using document.getElementById('targetElement').
// Then we created the event handler property which consists of the event target followed by the event name (the prefix on- and the event type.) In this example, we're using the click event which fires when the user presses and releases a mouse button on a DOM element.
// Lastly, we assigned an event handler function to the property.
// Event handlers can also be registered as an HTML element attribute, but you should always avoid inline JavaScript code in HTML files!

// Instructions
// 1.
// Check out the excerpt about JavaScript. There is more information, or moreInfo, to be read when the user clicks the readMore element, but it does not appear to be working. You are going to create an event handler to fix this!

// First, create an event handler property for a click event that uses the readMore button as the event target.

// 2.
// Now, you need to make the moreInfo element appear when the click event fires. Create a statement that changes the .display style property of the moreInfo element to 'block'.

// Once you've completed this run your code and fire your event!

let readMore = document.getElementById('read-more')
let moreInfo = document.getElementById('more-info')

// Write your code here:
readMore.onclick = function () {
  moreInfo.style.display = "block";
}