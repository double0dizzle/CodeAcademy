// Targeting by Class
// Let's look at the code we just pasted into our main.js file:

// $(document).ready(() => {

// });
// In the example above, document is a special keyword that we use to target the HTML document and create a jQuery object.

// We can use the same $() syntax to create jQuery objects for elements on a web page. Typically, we pass a string into $() to target elements by id, class, or tag. Once targeted, we can use . notation to attach a handler method that triggers a callback function.

// Let's consider how we can target elements by class. We can reference elements by class name with the following syntax:

// $('.someClass').handlerMethod();
// In the example above, every element with a class of 'someClass' is targeted. Note, we prepend the class name with a period (.someClass). Then, we call the .handlerMethod() on all of the referenced items.

// Let's give this a shot on our MOVE Gear site.


$(document).ready(() => {
    $('.product-photo').show();
    });