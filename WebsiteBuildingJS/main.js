// Tweak an Element
// When using the DOM in your script to access an HTML element, you also have access to all of that element's properties.

// This includes the ability to modify the contents of the element as well as its attributes and properties— that can range from modifying the text inside a p element to assigning a new background color to a div.

// You can access and set the contents of an element with the .innerHTML property.

// For example, the following code reassigns the inner HTML of the body element to the text 'The cat loves the dog':

// document.body.innerHTML = 'The cat loves the dog.';
// The .innerHTML property can also add any valid HTML, including properly formatted elements. The following example assigns an h2 element as a child inside the <body> element:

// document.body.innerHTML = '<h2>This is a heading</h2>';
// Instructions
// 1.
// Use the .innerHTML property to modify the content of the body to display the text 'This is the text of the body element'.

// Notice that the previous content inside of body has been replaced


document.body.innerHTML = "This is the text of the body element."