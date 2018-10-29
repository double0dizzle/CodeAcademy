// .show()
// Now that we've learned how to hide elements on our page, we want to know how to make them reappear. Luckily, the .show() method does the opposite of .hide(). If an element on your page is hidden, .show() will make it appear.

// $('.show-arrow').on('click', () => {
//   $('.shoe-information-2').show();
// });
// The code above should look similar to the code you wrote using .hide(). The only difference is that we are calling a different method on the targeted elements. This time we are calling the .show() method on the shoe's textual information.

// Check out the gif below to see .show() in action!



// In this gif, all elements of class shoe-information-2 appear when an element of class show-arrow is clicked.


$(document).ready(() => {
    $('.hide-button').on('click', () => {
      $('.first-image').hide();
    });
    
    $('.show-button').on('click', () => {
      $('.first-image').show();
    });
    
  });