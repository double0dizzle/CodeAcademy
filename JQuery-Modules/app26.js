// Closest
// To select an element close to the current element, we can use jQuery's .closest() method.

// The .closest() method will travel up the DOM tree to find a specified selector closest to it. Its syntax looks like:

// $('.example-class-one').closest('.another-class');
// In the example above:

// The .closest() method is called on '.example-class' elements.
// The method then targets the element selected by the .closest() method with a class of '.another-class'.
// <div class='.another-class'>
//   <p class='.example-class-one'>1</p>
// </div>
// <div class='.another-class'>
//   <p class='.example-class-two'>2</p>
// </div>
// Given this HTML, the jQuery above would select the <div> element that wraps the paragraph with a value of 1, because it is the closest element, up the DOM tree, with the class .another-class.



$(document).ready(() => {
  
    $('.shoe-details').show();
    
    $('.more-details-button').on('click', event => {
      $(event.currentTarget).closest('.product-details')
    });  
    
    $('.shoe-details li').on('click', event => {
      $(event.currentTarget).addClass('active');
    
      $('.shoe-details').children().removeClass('disabled')   
      
      $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled'); $(event.currentTarget).siblings().removeClass('active')
      
      
    });
    
    
    
    ///////////////////////////////////////////
    $('.login-button').on('click', () => {
      $('.login-form').toggle();
      $('.login-button').toggleClass('button-active');
    });
  
    $('.product-photo').on('mouseenter', () => {
      $(this).addClass('photo-active');
    }).on('mouseleave', function() {
      $(this).removeClass('photo-active');
    });
  
    $('.menu-button').on('click', () => {
      $('.menu-button').toggleClass('button-active');
      $('.nav-menu').toggleClass('hide');
    });
  })