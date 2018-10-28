// Madison Square Market
// Madison Square Market wants to use jQuery to make drop-down menus appear and disappear on its home page.

// The steps below outline how to write jQuery code that provides the following interactivity:

// A menu appears when a user clicks on a specific menu header
// The menu disappears when the user's mouse exits the menu

// If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.



$(document).ready( () => {
    $('#cart').on('click', () => {
      $('#cartMenu').show();
    });
    $('#account').on('click', () => {
      $('#accountMenu').show();
    });
    $('#help').on('click', () => {
      $('#helpMenu').show();
    });
    $('.dropdown-menu').on('mouseleave', () => {
      $('.dropdown-menu').hide();
    });
  })