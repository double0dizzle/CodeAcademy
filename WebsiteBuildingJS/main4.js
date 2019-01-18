// Create and Insert Elements
// Just as the DOM allows scripts to modify existing elements, it also allows for the creation of new ones. The .createElement(tagName) method creates a new element based on the specified tag name. However, it does not append it to the document. It creates an empty element with no inner HTML.

// In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM. We call this process appending. The .appendChild() method will add a child element as the last child node.

// The following code creates a new paragraph element, adds text to the new element's innerHTML, and appends it to the body of the document:

// let paragraph = document.createElement('p');
// paragraph.innerHTML = 'The text inside paragraph';
// document.body.appendChild(paragraph);
// Unlike .innerHTML the .appendChild() method does not replace the content inside of the parent, in this case body. Rather, it appends the element as the last child of that parent.

// Instructions
// 1.
// Create a li element in the document and save it to a variable.
// Assign the new element an id of "oaxaca" by using the .id property on the new variable.
// Assign the element the text "Oaxaca, Mexico" by using the .innerHTML method.
// 2.
// Append the new element you created as the last child of the list with the ID more-destinations. Scroll to the bottom of the page in the browser to see your new element.



var list = document.createElement('li');
list.id = "oaxaca"
list.innerHTML = "Oaxaca Mexico";
document.getElementById('more-destinations').appendChild(list);