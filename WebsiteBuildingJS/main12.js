// Event Object Properties
// JavaScript stores events as event objects with their related data and functionality as properties and methods. There are pre-determined properties associated with event objects. You can call these properties to see information about the event, for example:

// the .target property to access the element that triggered the event.
// the .type property to access the name of the event.
// the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered.
// Instructions
// 1.
// Everyone loves a good puppy picture! Use what you've learned about event object properties to share this puppy photo with your friends.

// First, add a statement to the sharePhoto function that will change the display property of the event .target to 'none'.

// 2.
// Next, add a statement to the sharePhoto function that will modify the text element to state the number of milliseconds from the DOM loading to the event firing.

// 3.
// Now, to create functionality for the event object, assign the sharePhoto function to a click event on the share element.

// Run your code!



let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = event.timestamp;
}

share.onclick = sharePhoto;