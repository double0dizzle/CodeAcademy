const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    {
      name: 'HTML'
    },
    {
      name:'CSS'
    }, 
    {
      name: 'JavaScript'
    }
  ]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;

// Handlebars "Each" and "This" - Part II
// Using {{this}} also gives you access to the properties of the element being iterated over.

// For instance, if you're using the following array inside the context object:

// const context = {
//   someArray: [
//     {shape: 'Triangle'},
//     {shape: 'Circle'},
//     {shape: 'Square'}
//   ] 
// }
// And your template looks like:

// {{#each anotherArray}}
//   <p>The current shape is: {{this.shape}}!</p>
// {{/each}}
// After going through the steps of compiling, the finished HTML will look like:

// <p>The current shape is: Triangle!</p>
// <p>The current shape is: Circle!</p>
// <p>The current shape is: Square!</p>
// This exercise will provide additional practice using the {{each}} block and accessing properties using {{this}}.

// Instructions
// 1.
// In index.html, in the <script> element with an id of languagesTemp, add an {{each}} helper block. Use {{#each}} to start the block and {{/each}} to end the block. Then in the starting expression, add an argument of languages.

// 2.
// Inside the {{each}} block, add a <div> element with a class attribute of "card". Inside the <div> element, add a <p> element with the text: I should learn {{this.name}}..

// After compiling, for each iteration of elements, {{this.name}} will be replaced with a value.

// 3.
// Navigate to main.js. In the context object, add a languages property and set its value to an empty array.

// 4.
// Populate the languages array with 3 objects. Each object will have a name property. The values for the name are: 'HTML', 'CSS', 'JavaScript'.