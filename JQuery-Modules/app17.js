// currentTarget
// Have you noticed in our Sole Shoes website that when you mouse over one photo, all of the images zoom. That's because .product-photo is a class on all the product photos.

// One way to solve this issue is to give each HTML element a unique class and to write three mouseenter and mouseleave functions. That, however, would result in a lot of repetitive code. Luckily there's a better way.

// The solution is in the callback function and selector we're using when we add a new class. Instead of selecting $('.product-photo') in each callback function, we need to pass event information into the function and call the currentTarget attribute:

// $('.example-class').on('mouseenter', event => {
//   $(event.currentTarget).addClass('photo-active');
// });
// The points below explain some of the features of the event.currentTarget selector in the example above.

// When a user triggers the mouseenter event listener above, the .on() method generates an event object that we pass into the callback function.
// Inside the callback function, we select event.currentTarget. The currentTarget attribute refers to only the .example-class element that the learner has moused over.
// Since $(event.currentTarget) refers to the element that an event is detected on, you will only use it inside a callback function.
// In our Sole Shoes website, we will use $(event.currentTarget) to target the one image a user mouses over.



$(document).ready(() => {
    $('.login-button').on('click', () => {
      $('.login-form').show();
    });
    
    $('.menu-button').on('mouseenter', () => {
      $('.nav-menu').show()
    })
    
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
    })
    
    $('.product-photo').on('mouseenter',event => {
      $(event.currentTarget).addClass('photo-active')
    }).on('mouseleave', event => {
      $(event.currentTarget).removeClass('photo-active')
    })
    
  }); 



//   Review: Event Handlers
// In this lesson, you learned a few of the most common mouse events in the jQuery library.

// Event handlers are comprised of an event listener and a callback function. An event listener specifies the type of event that will be detected. The callback function executes when the event happens. Everything together is the event handler.
// An event listener is set up using the .on() method.
// The events listened for included: 'click', 'mouseenter', and 'mouseleave'.
// In addition to event handlers, you learned how to use event.currentTarget to refer to the individual element that an event occurred on.