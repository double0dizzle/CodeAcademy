// Handlebars "If" block helper
// So far, you've only used Handlebars expressions to insert values in your templates. If you want to check for a specific object property before you insert a value, Handlebars provides you with the {{if}} helper block. The {{if}} helper is similar to the if conditional in JavaScript, but there is a difference in syntax:

// {{#if argument}}
//   // Code to include if the provided argument is truthy 
// {{/if}}
// Notice that the example above has both an opening {{#if}} expression and a closing {{/if}} expression. The code block between those expressions will be added to the final HTML template if the argument provided is truthy.

// Instructions
// 1.
// In the index.html file, locate the <script> that has an id of 'ifHelper'. Inside the located <script> element, add an {{if}} helper block. Provide an argument of opinion to the opening {{if}} expression.

// 2.
// Inside the {{if}} block, add an opening and closing <p> tag. Inside the created <p> add in the text: "The correct way to say 'GIF' is GIF!".

// This template will now include a <p> element that says "The correct way to say 'GIF' is GIF!" if opinion is truthy.

// 3.
// Go to main.js. Some of the boilerplate code has been provided for you. However, you still have to create the object that you want to pass into template.

// In a line below template, declare a variable named context using the keyword const. Then, assign to context an object that has a property of opinion and a value of true.

// The syntax will look like:

// const context = {
//   opinion: true
// };
// 4.
// Finally, in the last line of main.js, assign debateElement's .innerHTML property the value of compiledHtml.

// Run the code and you should see some text appear on the browser!

const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
  opinion: true
}

const compiledHtml = template(context);

const debateElement = document.getElementById('debate');

debateElement.innerHTML = compiledHtml;