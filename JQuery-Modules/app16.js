// Chaining Events
// jQuery also allows us to chain multiple methods. Instead of re-declaring the HTML element you're selecting, you can append one event to another. Let's see how we can use chaining to add hover functionality to .example-class elements.

// $('.example-class').on('mouseenter', () => {
//   $('.example-class-one').show();
// }).on('mouseleave', () => {
//   $('.example-class-one').hide();
// });
// In the example above, we chain a mouse enter event to a mouse leave event. Both of the event handlers target .example-class elements.

// When a user's mouse enters an .example-class element's area we show .example-class-one elements. When a user's mouse leaves an .example-class element's area, we hide .example-class-one elements.

$(document).ready(() => {
    $('.login-button').on('click', () => {
      $('.login-form').show();
    });
    
    $('.menu-button').on('mouseenter', () => {
      $('.nav-menu').show()
    })
    
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
    });
    $('.product-photo').on('mouseenter', () => {
      $('.product-photo').addClass('photo-active');
    }).on('mouseleave', () => {
      $('.product-photo').removeClass('photo-active');
    })
    
  });