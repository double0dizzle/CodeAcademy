// Move to the right a little more, and you will see this expression:

// document.getElementById('app')
// You just learned that ReactDOM.render() makes its first argument appear onscreen. But where on the screen should that first argument appear?

// The first argument is appended to whatever element is selected by the second argument.

// In the code editor, select index.html. See if you can find an element that would be selected by document.getElementById('app').

// That element acted as a container for ReactDOM.render()'s first argument!



import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));