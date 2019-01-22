// Using Handlebars expressions
// The power of Handlebars lies in its reusability and extensibility. Handlebars expressions allow us to accomplish this.

// Inside a script, Handlebar expressions are wrapped with double braces, {{ }}. The content inside the curly braces serves as a placeholder.

// For instance, if we use the following script:

// <script id="foo" type="text/x-handlebars-template">
//   <p>{{bar}}</p>
// </script>
// And our JavaScript file looks like:

// const source = document.getElementById('foo').innerHTML;

// const template = Handlebars.compile(source);

// const context = {
//   bar: 'Text of the paragraph element'
// };

// const compiledHtml = template(context);
// After running our code, the expression, {{bar}} is replaced with the value of context.bar in our JavaScript file. In other words, compiledHtml will contain a string of '<p> Text of the paragraph element </p>'.

// Instructions
// 1.
// Start by creating your Handlebars template in index.html. Under the opening <head> tag, create a <script> element. Give the script element an attribute of id with a value of 'greet'. Then, add another attribute, type to the same script, and assign type a value of 'text/x-handlebars-template'.

// The id will allow you to select the HTML inside the script and the type determines that it is going to be used by the Handlebars object.

// 2.
// In the <script> element you just made, add a Handlebars expression with greeting inside the expression.

// 3.
// Now navigate to your main.js file. You want to access the HTML stored in the <script id="greet" type="text/x-handlebars-template"> element to later make a Handlebars template:

// Access document.getElementById('greet').innerHTML and assign it to a const variable source.
// 4.
// source is a string that contains the raw HTML, but you want to be able to replace the Handlebars expressions with actual values. Sounds like you need a function to replace the Handlebars expressions in the HTML.

// Call Handlebars.compile() with source and save the returned value in a template using const. template is a function that when passed an object returns a completed/compiled template in a string.

// 5.
// Create a context object to hold values for filling out the Handlebars template.

// Create an object context and save it as a const variable. Add a key of greeting with the value 'Hello World!'.

// 6.
// To replace the Handlebars expressions with the values in context, call template() with an argument of context and save the value to a const variable compiledHtml.

// 7.
// Now you have to select the element that will contain the templated HTML.

// Create a variable named fill using the const keyword and assign it document.getElementById('hello')

// 8.
// It's time to add the compiled template HTML to the web page.

// Assign compiledHtml to fill's innerHTML property.

// Once you pass the checkpoint, the browser will render 'Hello World!'.

const source = document.getElementById('greet').innerHTML;

const template = Handlebars.compile(source);

const context = {
  greeting: 'Hello World!'
}

const compiledHtml = template(context);

const fill = document.getElementById('hello');

fill.innerHTML = compiledHtml;