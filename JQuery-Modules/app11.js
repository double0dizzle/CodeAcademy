// .fadeToggle()
// Great work! With fade, our website is starting to look dynamic. .fadeToggle() is the third and final method in this trio of fade methods. This method is similar to .toggle(). If you call .fadeToggle() on an element that is invisible, it will fade in. And if the element is already visible, then .fadeToggle() will make it fade out.

// Like the other fade methods, .fadeToggle() can take an argument that sets the duration of the effect.

// $('div').fadeToggle(1000);
// In the example above, all div elements will fade in or out over a period of 1000 milliseconds. Hidden div elements will fade in, and visible div elements will fade out.

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
    
    $('.fade-toggle-button').on('click', () => {
      $('.fade-image').fadeToggle('fast')
    });
  });