// Feedster
// In this project, you will help feedster add dynamic behavior to their website. They need help adding hover functionality to their navigation menu and buttons.

// If you're up for a challenge, feedster also wants help limiting their users' posts to 140 characters or less. You'll need to use the jQuery documentation to figure out how to implement this using the jQuery keyup method!


$(document).ready(() => {
  
    $('.menu').on('mouseenter', () => {
      $('.nav-menu').show();
    });
    
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
    });
    
     $('.btn').on('mouseenter', (event) => {
      $(event.currentTarget).addClass('btn-hover').on('mouseleave', (event) => {
      $(event.currentTarget).removeClass('btn-hover')
    });
    });
    
    $('.postText').on('keyup', () => {
      let post = $(event.currentTarget).val();
      let remaining = 140 - post.length;
      if (remaining <= 0){
        $('.wordcount').addClass('red')
      } else {
        $('.wordcount').removeClass('red')
      }
      $('.characters').html(remaining);
    });
    $('.postText').focus();
    
  });