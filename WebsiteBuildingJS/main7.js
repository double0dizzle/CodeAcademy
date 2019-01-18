// Traversing the DOM
// In the DOM hierarchy, parent and children relationships are defined in relation to the position of the root node.

// A parent node is the closest connected node to another node in the direction towards the root.

// A child node is the closest connected node to another node in the direction away from the root.

// These relationships follow the nesting structure present in HTML code. Elements nested within one HTML tag are children of that parent element.

// Each DOM element node has a .parentNode and .children property. The property will return a list of the element's children and return null if the element has no children.

// The .firstChild property will grant access to the first child of that parent element.

// Instructions
// 1.
// Access the .firstChild of the body and save it to a variable named first. Modify its .innerHTML to say 'I am the child!' Take a moment to note which element has now been modified.

// 2.
// Use the .parentNode property to access the parent element of the variable first and modify its .innerHTML to say 'I am the parent and my inner HTML has been replaced!' Take a moment to notice the change in the web page.



let first = document.body.firstChild;
first.innerHTML = "First child";
first.parentNode.innerHTML = "I am the parent and my inner HTML has been replaced!";