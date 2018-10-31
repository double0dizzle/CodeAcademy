// Parent & Siblings
// In addition to the .children() method we covered in the last exercise, there are two methods you can use to select the parent and siblings of an element.

// $('.choice').on('click', event => {
//   $(event.currentTarget).parent().hide();
// });
// In the example above, the .parent() method targets the parent element of '.choice' elements and removes it from the DOM.

// $('.choice').on('click', event => {
//   $(this).siblings().removeClass('selected');
//   $(event.currentTarget).addClass('selected');
// });
// In the code above, the .siblings() method targets elements adjacent to the clicked '.choice' and removes the 'selected' class from any previously clicked '.choice's. Then the 'selected' class is added only to the clicked '.choice'.



$(document).ready(() => {
  
    $('.shoe-details').show();
    
    $('.more-details-button').on('click', event => {
     
    });  
    
    $('.shoe-details li').on('click', event => {
      $(event.currentTarget).addClass('active');
      $(event.currentTarget).siblings().removeClass('active')
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