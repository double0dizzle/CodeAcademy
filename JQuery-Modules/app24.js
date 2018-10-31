// Children
// According to the DOM tree, the outermost element is the parent of all elements inside of it. Therefore, the HTML elements inside of the outer element are children. The jQuery .children() method allows us to target these elements.

// <div class='parent' id='holder'>
//   <div>Child <span>1</span></div>
//   <div>Child <span>2</span></div>
//   <div>Child <span>3</span></div>
// </div>
// const $kids = $('#holder').children();
// $kids.on('click', event => {
//   $(event.currentTarget).css('border', '1px solid black');
// });
// In the example above, the $kids variable refers to all children of the element with id 'holder' (the divs inside '#holder'). The .on() method adds the click event handler to these $kids. When one of them is clicked, jQuery will add a border around it that is 1px wide and solid black.

// It is important to note that only the direct descendants of '#holder' are considered children. Any elements inside the child elements of '#holder', such as the <span> elements, will not be targeted by the .children() method.



$(document).ready(() => {
  
    $('.shoe-details').show();
    
    $('.more-details-button').on('click', event => {
      
    });  
    
    $('.shoe-details li').on('click', event => {
      $(event.currentTarget).addClass('active');
      
      $(event.currentTarget).siblings().removeClass('active')
      $('.shoe-details').children().removeClass('disabled')
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