// JavaScript Error Types
// Now that you can identify the type of error from an error stack trace, you might be wondering what the different types of errors mean.

// Here are three common error types:

// SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn't include any invalid semicolons.
// ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
// TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.
// There are seven types of built-in JavaScript errors in total. You can find more information about all of them at the MDN JavaScript Error documentation. Whenever you are confronted with an error you can't comprehend, consulting this documentation is a great place to start.



myVariable++;
// 1 - What type of error will be thrown on the line above: ReferenceError

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: TypeError

// const myRandomNumber; = Math.random();
// 3 - What type of error will be thrown on the line above: SyntaxError