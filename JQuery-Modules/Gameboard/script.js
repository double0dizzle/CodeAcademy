// Gameboard
// Gameboard is creating a scoreboard that displays NBA scores from around the league. They want the user to be able to click the More link to see the dropdown menu, to click the Share link to see the share menu, and to click the notification bell.

// If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.



var main = function() {

    $('.more-btn').on('click', (event) =>{
      $(event.currentTarget).siblings('.more-menu').toggle();
    });
    
    $('.share').on('click', (event) => {
      $(event.currentTarget).next().toggle();
    });
    $('.notification').on('click', (event) => {
      $(event.currentTarget).toggleClass('active');
    });
    
  
    
    
  };
  
  $(document).ready(main);