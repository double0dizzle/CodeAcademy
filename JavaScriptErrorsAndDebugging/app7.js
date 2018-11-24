// Debugging Review
// You just learned a lot of techniques for helping you get unstuck in all debugging situations. Congratulations! Let's synthesize everything you learned into one debugging process.

// Is your code throwing errors? If so, read the error stack trace for the type, description, and location of the error. Go to the error's location and try to fix.
// Is your code broken but not throwing errors? Walk through your code using console.log() statements. When unexpected results occur, isolate the bug and try to fix it.
// Did you locate the bug using steps 1 and 2, but can't fix the bug? Consult documentation to make sure you are using all JavaScript functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your own Stack Overflow question if none exist on the topic.
// It may take some time and practice, but this is how all developers work through their issues, so don't give up, and you'll be an expert in no time.

// Congratulations again on learning all of these new techniques. Let's give them one more round of practice so you can see how much progress you've made!

// Instructions
// 1.
// In the code editor, we have provided you a broken implementation of a function called isStringPerfectLength(). This function takes a string (string), a minimum string length (minLength), and a maximum string length (maxLength). It should return whether the provided string is within the range of the two lengths. More specifically, if it is longer than the minLength and shorter than the maxLength.

// We have provided three example test cases at the bottom of the file. The first checks if the string 'Dog' is in the length range of 2 and 4. In this case, the function should return true because the length of the string is 3 which is between those two values. The next two examples fail. The first fails because the string is too long. The second fails because the string is too short.

// Using the debugging process you learned in this lesson, outlined above, find and fix all the bugs in this code.

// The code will throw errors at your right off the bat, but remember, this is a good thing! We believe you have all the skills now to debug this code. Don't give up and show us what you've learned! We know you can do it.



function isStringPerfectLength(string, minLength, maxLength) {
    const stringLength = string.length;
    
    if ((stringLength > minLength) && (stringLength < maxLength)) {
      return true;
    }  else {
      return false;
    }
  }
  
  // Should return true
  console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));
  
  // Should return false
  console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));
  
  // Should return false
  console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));