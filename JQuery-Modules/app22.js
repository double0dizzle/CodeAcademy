// .removeClass()
// Similar to .addClass(), the jQuery .removeClass() method can remove a class from selected elements.

// Its syntax is similar to .addClass():

// $('.example-class').removeClass('active');
// In the example above:

// .removeClass() is called on .example-class elements.
// The method removes the 'active' class from all .example-class elements.



$(document).ready(() => {
 
    $('.login-button').on('click', () => {
      $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
      $('.nav-menu').show();
      $('.menu-button').addClass('button-active');
      $('.nav-menu').removeClass('hide');
      
      $('.menu-button').animate({
        fontSize: '24px'
      }, 200)
    })
    
    $('.nav-menu').on('mouseleave', () => {
      $('.menu-button').removeClass('button-active')
      
      $('.menu-button').animate({
        fontSize: '18px'
      }, 200)
    })
    
  });