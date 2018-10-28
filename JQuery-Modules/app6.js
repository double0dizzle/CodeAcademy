// Event Handlers
// Now that we've got jQuery up and running, let's give it a little gas! The jQuery .on() method adds event handlers to jQuery objects. The method takes two parameters: a string declaring the event to listen for (the handler) and a callback function to fire when the event is detected.

// $('#login').on('click', () => {
//   $loginForm.show();
// })
// In the example above, we use .on() to add the click event handler to the #login element. Inside of the callback function, we use the .show() method to show the jQuery object saved in the $loginForm variable.

// When a user clicks the login element, the login form appears.



$(document).ready(() => {
    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');
    
    $menuButton.on("click", () => {
      $navDropdown.show();
    })
  })



//   Review: jQuery Introduction
// That's just a taste of what you can do with jQuery. While there's still a lot to learn, in this unit you used jQuery to add dynamic behavior to a website. With jQuery objects, you can quickly target elements, handle events and add visual effects with just a few lines of code.

// That said, when using any jQuery tools, it is important to consider how events and effects will appear on different platforms.

// In this lesson, you learned:

// About JavaScript libraries.
// How to add jQuery to your web page.
// How to avoid loading errors with the .ready() method.
// About jQuery objects and their methods.
// How to target elements by id and class.
// Naming conventions for storing jQuery objects in JavaScript variables.
// How to add event handlers with .on().
// A couple jQuery effects, such as .hide() and .show().