// .hide()
// The first tool you will add to your jQuery effects tool belt is the .hide() method. When you hide an element, your browser will render the HTML as if the hidden element does not exist. It will disappear from the page and the space that it was taking up will disappear as well. Take a look at the code below to learn how to use the .hide() method:

// $('.hide-arrow').on('click', () => {
//   $('.shoe-information').hide();
// });
// In the example above, the event handler gets triggered whenever an element with a class of hide-arrow is clicked. That element could be a button, some text, an image, or any other HTML element. When the event is triggered, we target all elements of the class shoe-information and call .hide() on them. Check out the gif below to see an example.



// In this gif, the shoe-information element hides when the hide-arrow button is clicked. Notice that the HTML elements below the shoe-information element move up to fill the space left by the hidden element.



$(document).ready(() => {
    $('.hide-button').on('click', () => {
      $('.first-image').hide();
    });
  });