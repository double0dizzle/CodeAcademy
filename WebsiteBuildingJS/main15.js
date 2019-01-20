// Keyboard Events
// Another popular type of event is the keyboard event! keyboard events are triggered by user interaction with keyboard keys in the browser.

// The keydown event is fired while a user presses a key down. Key Down Event Image

// The keyup event is fired while a user releases a key. Key Up Event Image

// The keypress event is fired when a user presses a key down and releases it. This is different from using keydown and keyup events together, because those are two complete events and keypress is one complete event. Key P ress Event Image

// Keyboard events have unique properties assigned to their event objects like the .key property that stores the values of the key pressed by the user. You can program the event handler function to react to a specific key, or react to any interaction with the keyboard.

// Instructions
// 1.
// Now it's time to create a game! Program this code to dribble the ball on the platform using any key on a keyboard. When a user presses a key down, it should lift the ball up. When the user releases the key, the ball should drop.

// First, make a function named up that will raise the bottom position of the ball to '250px' above the platform element.

// 2.
// Next, make a function named down that will run when the ball drops to the platform element. This function should change the bottom position of the ball to '50px'.

// 3.
// Create an event handler property that runs the up function when a keydown event fires on the document object, or anywhere on the DOM, as the event target.

// 4.
// Create an event handler property that runs the down function when a keyup event fires on the document.

// Run your code and play around with the keyboard events to make the ball bounce on the platform. You can try keys like the space bar, letter keys or number keys!



let ball = document.getElementById('float-circle');

// Write your code below
let up = function(){
  ball.style.bottom = "250px";
}
let down = function(){
  ball.style.bottom = "50px";
}
document.onkeydown = up;
document.onkeyup = down;



// Review
// Congrats, you completed the lesson! Now you've learned about JavaScript events and you can leverage these events on the DOM to create interactivity with event handlers.

// Let's review what you've learned:

// JavaScript engines register events as objects with properties and methods associated with them.
// Event handlers are registered as properties of their event object.
// Event object properties like .target, .type, and .timeStamp are used to provide information about the event.
// The .addEventListener() method can be used to add multiple event handler functions to a single event.
// The .removeEventListener() method stops specific event handlers from "listening" for specific events firing.