// Remove an Element
// In addition to modifying or creating an element from scratch, the DOM also allows for the removal of an element. The .removeChild() method removes a specified child from a parent.

// Because the .querySelector() method returns the first paragraph, the following code would remove the first paragraph in the document:

// let paragraph = document.querySelector('p');
// document.body.removeChild(paragraph);
// It's possible to also specify a different parent with the .querySelector() method, as long as you remove an element nested within that parent element.

// If you want to hide an element because it does not need to be loaded initially, the .hidden property allows you to hide it by assigning it as true or false:

// document.getElementById('sign').hidden = true;
// The code above did not remove the element from the DOM, but rather hid it. This is not the same as setting the CSS visibility property to hidden. For a list of the best use cases for this property, read a list in the MDN documentation.

// Instructions
// 1.
// Select the element with the ID oaxaca and save it to a variable.
// Select its parent, assigned an ID of more-destinations.
// Remove the element using the .removeChild() method and passing in the variable containing the oaxaca element.



let element = document.getElementById('oaxaca');
document.getElementById('more-destinations').removeChild(element);