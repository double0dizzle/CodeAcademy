// fading
// Great work! In this exercise, you will learn about two new methods that are similar to .hide() and .show(). Take a look at the gif below:



// In this gif, the .fadeIn() method is called on an HTML element. Instead of instantly showing the element, .fadeIn() and .fadeOut() make the element appear or disappear over a given period of time. You can think of this as an animation. The transition between being visible and invisible happens over a duration of time.

// Both .fadeIn() and .fadeOut() take an optional parameter that specifies how long the animation will take. For example, in the code below, all <div> elements will fade out over a period of 1000 milliseconds (or one second).

// $('div').fadeOut(1000);
// In the example above, the 1000 argument is optional; you don't need to put a number between the parentheses. This number represents the number of milliseconds it takes for the animation to complete. If no argument is given, the default animation duration is 400 milliseconds.


$(document).ready(() => {
    $('.hide-button').on('click', () => {
      $('.first-image').hide();
    });
    
    $('.show-button').on('click', () => {
      $('.first-image').show();
    });
    
    $('.toggle-button').on('click', () => {
      $('.first-image').toggle();
    });
    
    $('.fade-out-button').on('click', () => {
      $('.fade-image').fadeOut(500);
    });
    
    $('.fade-in-button').on('click', () => {
      $('.fade-image').fadeIn(4000);
    });
    
  });