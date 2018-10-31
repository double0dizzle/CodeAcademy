// .toggleClass()
// Similar to other effects methods, you can use a toggle method instead of chaining the .addClass() and .removeClass() methods together.

// The .toggleClass() method adds a class if an element does not already have it, and removes it if an element does already have it. Its syntax looks like:

// $('.example-class').toggleClass('active');
// In the example above:

// .toggleClass() is called on .example-class elements.
// .toggleClass() will add the 'active' class to .example-class elements if they do not have it already.
// .toggleClass() will remove the 'active' class from .example-class elements if they do have it already.


$(document).ready(() => {
    $('.login-button').on('click', () => {
      $('.login-form').show();
    });
    
    $('.menu-button').on('click', () => {
      $('.nav-menu').toggleClass('hide');
      $('.menu-button').toggleClass('button-active')
    })  
  }); 


//   Review: Style Methods
// jQuery can be a wizard at managing your CSS, but as with any powerful magic, it must be handled with care and consideration or you'll end up with a giant mess!

// There may be instances where modifying specific CSS properties with jQuery makes sense, but as a best practice, it's best to maintain an organized CSS file and use jQuery to manipulate clearly defined and well-named CSS classes.

// In this lesson, you learned:

// The .css() method can change style properties of an element.
// The .css() method can accept multiple styles at once if you pass it a JavaScript object as its argument.
// The .animate() method can change specific style properties over a period of time.
// The .addClass() will add a CSS class to an element, and the .removeClass() method will remove a CSS class.
// The .toggleClass() method will toggle a class on or off an element.