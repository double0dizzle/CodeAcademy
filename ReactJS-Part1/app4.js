// You can nest JSX elements inside of other JSX elements, just like in HTML.

// Here's an example of a JSX <h1> element, nested inside of a JSX <a> element:

// <a href="https://www.example.com"><h1>Click me!</h1></a>
// To make this more readable, you can use HTML-style line breaks and indentation:

// <a href="https://www.example.com">
//   <h1>
//     Click me!
//   </h1>
// </a>
// If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it:

const myDiv = (
    <div>
      <h1>Hello World</h1>
    </div>
  )