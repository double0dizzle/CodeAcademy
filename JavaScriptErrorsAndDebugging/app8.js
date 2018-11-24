// Introduction to Error Handling
// There are two categories of programming mistakes: those that don't prevent our code from running and those that do.

// Sometimes, we've written code that successfully returns a value but a different value from what we expected. Our program continues running, and we might not even realize anything went wrong until much later. It's like making soup and accidentally adding sugar instead of salt. In the end we still have soup, but it might not be soup that we want to eat. We will not be focusing on these mistakes.

// Rather, we're going to focus on the errors that pop up when we've written code that causes our program to stop running, e.g. trying to reassign a const variable. Instead of returning anything, our program will not execute any more code past where the error occurred. For example, what if we tried to move our soup to the table but dropped it because it was too hot? Then our soup-making process is over— there would be no soup.

// We can't always stop errors before they occur, but we can include a backup plan in our program to anticipate and respond to the errors to ensure that our program continues running. Error handling is the process of programmatically anticipating and addressing errors. In JavaScript, we handle errors using the keywords try and catch. We try to move the soup to the table, making sure there's someone or something nearby to catch the soup in case we drop it.

// In this lesson we'll learn more about errors and how to create a backup plan to allow our program to continue running. When you're ready, let's try to get a handle on these JavaScript errors!


// Runtime Errors
// Errors contain useful messages that that tell us why our program isn't working or why the error was thrown. When an error is thrown, our program stops running and the console displays red text of the error message like so:


// When we execute code and a line of code throws an error, that error is referred to as a runtime error. In JavaScript, there are built-in errors objects that have a name and message property which tell us what when wrong. Examples of built-in runtime errors include:

// ReferenceError: when a variable or function cannot be found.
// TypeError: when a value is not a valid type, see the example below:
// const reminder = 'Reduce, Reuse, Recycle';
// reminder = 'Save the world';
// // TypeError: Assignment to constant variable.
// console.log('This will never be printed!');
// In the example above, when we try to reassign a constant variable reminder, the TypeError is thrown. Code that is written after a thrown runtime error will not be evaluated, so the console.log() statement will not be evaluated.

// Let's see for ourselves what happens when a runtime error is thrown.

// Instructions
// 1.
// In main.js, we have a function throwError() that will throw a ReferenceError. There are also two console.log() statements, one at the top of the file and one at the bottom.

// Call throwError() below the comment that indicates to call it. Observe what code runs and what code doesn't.


console.log('This message will be printed to the console.');

function throwError () {
  return notDefinedVar;
}

// Call throwError() below:
throwError();

console.log('Because of the error, this will not printed!');