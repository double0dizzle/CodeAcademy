// Mouse Events
// When you click down or move the mouse device mouse events fire. Outside of the click event, there are other events that can be fired when using a mouse.

// The mousedown event is fired when the user presses a mouse button down. This is different from a click event because mousedown doesn't need the mouse button to be released to fire.

// Mouse Down Event Image

// The mouseup eve nt is fired when the user releases the mouse button. This is different from the click and mousedown events because mouseup doesn't depend on the mouse button being pressed down to fire.

// Mouse Up Event Image

// The mouseover event is fired when the mouse enters the content of an element.

// Mouse Over Event Image

// The mouseout event is fired when the mouse leaves an element.

// Mouse Out Event Image

// Instructions
// 1.
// In this exercise, you'll modify the list elements using mouse events. You can use the reset element that is already programmed to set the other list element back to their default styles.

// First, create an event handler property on itemOne when the mouse hovers over it.

// This can be an anonymous function with syntax like this:

// eventTarget.onevent
// 2.
// Now, assign an anonymous event handler function that changes the width of itemOne to any size greater or less than 400px.

// 3.
// Now, create an event handler property on itemTwo when the mouse is released over the element.

// 4.
// Create an event handler function that changes the background color of itemTwo when the mouse is released over the element.

// 5.
// Next, create an event handler property that fires when the mouse leaves the itemThree element.

// 6.
// Create an anonymous event handler function that changes the text of itemThree to 'The mouse has left the element.'.

// 7.
// Finally, create an event handler property that fires when the mouse is pressed down on itemFour.

// 8.
// Create an event handler function that makes the itemFive appear when the mouse is pressed down on itemFour.



// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.hidden = true;
};
resetButton.onclick = reset;

// Write code for the first list item
itemOne.onmouseover = function(){
  itemOne.style.width = '430px';
};

// Write code for the second list item
itemTwo.onmouseup = function(){
  itemTwo.style.backgroundColor = 'green'
};

// Write code for the third list item
itemThree.onmouseout = function(){
  itemThree.innerHTML = 'The mouse has left the element.'
};

// Write code for the fourth list item
itemFour.onmousedown = function(){
  itemFive.style.display = 'block';
};