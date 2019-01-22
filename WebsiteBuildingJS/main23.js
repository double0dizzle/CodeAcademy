// Combining "If" and "Each"
// In the previous exercises, you've mostly worked with individual expressions, however, you have the ability to combine expressions! In this exercise, you will combine the {{if}} block and the {{each}} block together in a single <script>!

// Let's revisit the code from the previous exercise. In this exercise, you'll be adding an element to the languages array and adding a new property, modern, to all the elements. Then you will manipulate the Handlebars script to show different texts based on the modern property.

// Instructions
// 1.
// In main.js, add a modern property with a value of true to each element of the languages array.

// 2.
// Now, add another object to the array in the languages property of context. This object will have a name property with a value of 'COBOL' and a modern property of false.

// If you take a look at the web page, you'll see that you should learn every language. But, since 'COBOL' isn't a modern language maybe it should be given less priority. Let's change that in the next step.

// 3.
// Navigate to index.html, in the Handlebars <script>, add a starting {{if}} expression directly under the <div class="card">. Add an argument of this.modern to the starting {{if}} expression.

// Then, directly above the closing <div> tag, add the closing {{if}} expression.

// 4.
// Great, now you should see that 'COBOL' is no longer on the web page!

// But remember, you can use {{else}} to create a default behavior for when languages are not modern.

// In the Handlebars <script> element, add an {{else}} section to the {{if}} block. Inside the {{else}} section, add a paragraph element that has the text When I have time, I'll learn {{this.name}}.

// Now you've covered both cases when the language is modern and when it isn't!

const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    {
      name: 'HTML',
      modern: true
    },
    {
      name:'CSS',
      modern: true
    }, 
    {
      name: 'JavaScript',
      modern: true
    },
    {
      name: 'COBOL',
      modern: false
    }
  ]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;