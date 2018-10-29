// .toggle()
// Great work! Our table now has two buttons that hide and show our image. But wouldn't it be nice to have one button do both? It is common for web pages to have one button that will either hide or show elements depending on their current state. We can achieve this by using the .toggle() method.

// $('.toggle-button').on('click', () => {
//   $('.shoe-information-3').toggle();
// });
// In the above code we call the .toggle() method on elements of class shoe-information-3. If the information is visible, clicking the .toggle-button will hide it, as if the following code were run.

// $('.toggle-button').on('click', () => {
//   $('.shoe-information-3').hide();
// });
// At the same time, if the shoe information is hidden, it will show itself as if the following code were run:

// $('.toggle-button').on('click', () => {
//   $('.shoe-information-3').show();
// });
// Take a look at the gif below to see the .toggle() method being called.



// In this gif, the .toggle() method is called twice. The first time the arrow is clicked, .toggle() shows the shoe information because it was hidden. The second time the arrow is clicked, .toggle() hides the shoe information because the information was being shown. There's no need to have a different button for .hide() and .show(); .toggle() can do both!



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
    
  });