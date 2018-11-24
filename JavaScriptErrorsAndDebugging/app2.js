// Debugging Errors
// Here's a process for efficiently working through your code's errors one by one:

// Run your code. Using the first error's stack trace, identify the error's type, description, and location.
// Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
// Fix the bug and re-run your code.
// Repeat steps 1-3 until your code no longer throws any errors.
// While these steps may seem simple, it can be easy to get overwhelmed by errors in practice. Using these steps, you can tackle your errors one at a time and soon will have your code running error-free.

// 1.
// The code in the code editor currently contains three errors. Using the above steps, locate and fix all three errors in the code. Don't be afraid of any error messages that appear, you are triggering them on purpose! Just take your time locating them and fixing them one at a time.

// If you get stuck, feel free to consult the hint.

// Note: The error messages in the terminal to the right may wrap to a new line based on your screen size. As a result, what you think is the end of a line might only be partway through it. Read through all of the error stack trace to ensure you find the information you're looking for.



function isSumBigger(number1, number2, total) {
    const sum = number1 + number2;
    
    if (sum > total) {
      return true;
    } else {
      return false;
    }
  }
  
  
  // Should return true
  console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));
  
  // Should return false
  console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));