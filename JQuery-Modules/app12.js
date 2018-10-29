// Sliding
// Have you ever been to a website and seen HTML elements slide into place? Many websites use this effect to show menus; you click on your profile image and a menu slides down revealing different settings and options that you can change. These sites are likely using jQuery sliding effects.

// By using sliding effects, an element on your web page will slide up or down into place instead of appearing or disappearing. Just like with the other effects, sliding can be applied to any element on your page whether it be an image, a video, or text.

// Sliding methods are animations; they happen over a period of time. As a result, sliding methods have an optional parameter to determine how long the animation will take.

// $('.menu-button').on('click', () => {
//   $('.menu-content').slideDown('slow');
// });
// In the above code, we call the .slideDown() method on the elements of class menu-content whenever menu-button elements are clicked. The slow parameter determines the speed of the animation. That code will produce something that looks like this:



// The menu-button element is clicked and the menu-content element slides down into place

// There are two other sliding methods in jQuery Effects. Use the documentation to find their names and read about their usage. One is used to slide elements up, and the other is used to toggle sliding effects.



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
      $('.fade-image').fadeToggle();
    });
    
    $('.up-button').on('click', () => {
        $('.slide-image').slideUp(100);
    });
    
    $('.down-button').on('click', () => {
      $('.slide-image').slideDown("slow");
    });
    
    $('.slide-toggle-button').on('click', () => {
      $('.slide-image').slideToggle();
    });
    
  });



//   Review: Effects
// Wow! You've completed this table of 9 different jQuery effects. Great job! To review, the methods that we learned were:

// .hide()
// .show()
// .toggle()
// These methods instantly hide or show elements on a web page.

// .fadeOut()
// .fadeIn()
// .fadeToggle()
// These methods make elements disappear or appear over a given period of time.

// .slideUp()
// .slideDown()
// .slideToggle()
// These methods make elements slide up or down into place over a given period of time.

// Using these effects, you can make your web pages eye-catching and dynamic. And thanks to the magic of jQuery all of this can be done with very few lines of code!