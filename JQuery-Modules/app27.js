// Next
// Sometimes you don't want to target all the siblings of an element — you just want to target the next one. That's where the aptly-named .next() method comes in!

// The code below is HTML for a menu. The list of food types is hidden, <ol style='display:none'>.

// <div class='heading'>MENU</div>
// <ol style='display: none'>
//   <li>Appetizers</li>
//   <li>Entrees</li>
//   <li>Salads</li>
//   <li>Sides</li>
//   <li>Desserts</li>
// </ol>
// Since the div and <ol> exist on the same level of the DOM, they are siblings. Since there are no elements between them, the <ol> is the next sibling of '.heading'. We can add an event handler to the div element and use the .next() method to show and hide the <ol> using the .toggle() method.

// const $heading = $('.heading');
// $heading.on('click', () => {
//   $(event.currentTarget).next().toggle();
// });
// In the example above, the .on() method attaches the click event handler to $heading. Then the callback function will toggle the class of the $heading's next sibling, the ol element.

// It's important to note that jQuery also has a method called .prev() that can look at the previous sibling.



$(document).ready(() => {
  
    $('.shoe-details').show();
    
       $('.more-details-button').on('click', event => {
      $(event.currentTarget).closest('.product-details').next().toggle()
    });  
    
    $('.shoe-details li').on('click', event => {
      $(event.currentTarget).addClass('active');
      
      $(event.currentTarget).siblings().removeClass('active')
      
      $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
      
      
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