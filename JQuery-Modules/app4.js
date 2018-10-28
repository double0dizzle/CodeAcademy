// Targeting by id
// While classes allow us to target multiple elements at once, we can also target single elements by id.

// To select by id, we prepend the element's id name with the # symbol.

// $('#someId').hide();
// In the example above, we target the #someId element and call the .hide() method on it. The .hide() method hides the someId element when the web page renders to a client's browser.

// Let's target by id to hide the navigation menu in our MOVE Gear site.


$(document).ready(() => {
    $('#nav-dropdown').hide();
    });