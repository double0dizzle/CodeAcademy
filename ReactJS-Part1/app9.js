// ReactDOM.render()'s first argument should evaluate to a JSX expression, it doesn't have to literally be a JSX expression.

// The first argument could also be a variable, so long as that variable evaluates to a JSX expression.

// In this example, we save a JSX expression as a variable named toDoList. We then pass toDoList as the first argument to ReactDOM.render():

// const toDoList = (
//   <ol>
//     <li>Learn React</li>
//     <li>Become a Developer</li>
//   </ol>
// );

// ReactDOM.render(
//   toDoList, 
//   document.getElementById('app')
// );



import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>Line 1</li>
  <li>Hi</li>
  <li>I'm learning React</li>
  </ul>
);

ReactDOM.render(myList, document.getElementById('app'));