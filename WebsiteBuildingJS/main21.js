const source = document.getElementById('eachHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
  newArray: ['a', 'b', 'c']
};

const compiledHtml = template(context);

const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;

// Handlebars "Each" and "This" - Part I
// Another helper that Handlebars offers is the {{each}} block which allows you to iterate through an array. Just like the {{if}} block, there is an opening {{#each}} expression and closing {{/each}} expression. Inside the {{each}} block, {{this}} acts as a placeholder for the element in the iteration.

// Below is an example of the Handlebars {{each}} block:

// {{#each someArray}}
//   <p>{{this}} is the current element!</p>
// {{/each}}
// This {{each}} block would be paired with an array like:

// const context = {
//   someArray: ['First', 'Second', 'Third'] 
// }
// After compiling, the HTML will look like:

// <p>First is the current element!</p>
// <p>Second is the current element!</p>
// <p>Third is the current element!</p>
// In this exercise, you'll be writing your own {{each}} block and using the {{this}} expression.

// Instructions
// 1.
// In index.html, in the <script> element with an id of eachHelper, create an {{each}} helper block. Use {{#each}} to start the block and {{/each}} to end the block. Add an argument of newArray to the starting expression.

// 2.
// Inside the {{each}} block, add a <div> element with a class attribute of "block". The content of the <div> will be {{this}}.

// Before you run the code, navigate to main.js and find the newArray property of the context object.

// Notice that the newArray property contains an array of the letters 'a', 'b', and 'c'.

// Run your code. If all went well you'll now have 3 blocks on the webpage!

// 3.
// Just to showcase how useful {{this}} and {{each}} can be, delete the elements inside the newArray. Instead of letters, filled array with elements of numbers starting with 1 and ending in 10.

// Run your code. This time, if all went well, your letters will be replaced with 10 blocks that increase from 1 to 10!