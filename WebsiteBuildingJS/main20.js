// Handlebars "Else" section
// In the previous exercise, you used {{if}} to determine if the compiled HTML should include a block of code. But, if that argument turns out to be falsy then you'll just have a blank section in your HTML!

// Instead, you can add a default line of code by creating an else section, using Handlebar's {{else}} expression.

// Take a look at the following code to see how {{else}} is implemented:

// {{#if argument}}
//   // Code to include if the provided argument is truthy 
// {{else}}
//   // Code to include if the provided argument is falsy 
// {{/if}}
// In this exercise, you'll incorporate an else section into your code from the previous exercise.

// Instructions
// 1.
// In index.html, in the <script> that has an id attribute of 'ifHelper', add an {{else}} expression inside the the {{if}} helper block.

// 2.
// Great, now you've started on your else section, but you need to include some code. Add into your else section a <p> element that contains the text: There's no right way to say GIF!

// 3.
// Go to main.js and assign the opinion property of context to false.

// Run your code and you should see the falsy condition appear in the browser!

const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

let context = {
  opinion: false
};

const compiledHtml = template(context);

const debateElement = document.getElementById('debate');
debateElement.innerHTML = compiledHtml;