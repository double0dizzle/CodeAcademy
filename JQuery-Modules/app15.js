// On 'mouseleave'
// One issue with the behavior we added to our Sole Shoes website in the last exercise is that the menu remains in the DOM after the mouse leaves the menu area.

// The mouseleave event listener can detect when a user's mouse leaves the area that an element occupies. The syntax looks like:

// $('.example-class').on('mouseleave', function() {
//     // Execute code here when mouse leaves .example-class
// });
// In the example code above, a user will trigger the callback function when their mouse leaves the .example-class area.



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
    
  }); 