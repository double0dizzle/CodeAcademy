// Trivia Card
// In this project, you will follow step-by-step instructions to add jQuery Effects to the Trivia Card on the right. We want the user to be able to read the clue, view an optional hint, and select their answer.

// You will add a few different effects. A hint box will slide up and down. When you click an incorrect answer, it will fade away and a frowny face will appear. When you click the correct answer, the frowny face will disappear and a smiley face will take its place.

// To complete this project, you must know how to target HTML elements in jQuery, how to create event handlers, and how to use several jQuery Effects methods.

// You can preview the starting state of the Trivia Card on the right.

// If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.



$(document).ready(() =>{
    $('.hint-box').on('click', () => {
      $('.hint').slideToggle(500);
    });
    $('.wrong-answer-one').on('click', () => {
      $('.wrong-text-one').fadeOut('fast');
      $('.frown').show();
    });
    $('.wrong-answer-two').on('click', () => {
      $('.wrong-text-two').fadeOut('fast');
      $('.frown').show();
    });
    $('.wrong-answer-three').on('click', () => {
      $('.wrong-text-three').fadeOut('fast');
      $('.frown').show();
    });
    $('.correct-answer').on('click', ()=> {
      $('.frown').hide();
      $('.smiley').show();
      $('.wrong-text-one').fadeOut('fast');
      $('.wrong-text-two').fadeOut('fast');
      $('.wrong-text-three').fadeOut('fast');
    });
  });