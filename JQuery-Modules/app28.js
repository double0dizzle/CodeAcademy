// find
// Sometimes we want to target an element that lives inside another, but we don't want to use the .children() method, since that might target more elements than we need. That's where the .find() method comes in. This method finds and targets singular or multiple elements that are descendants of an element. Unlike the .children() method, it traverses all descendants of the specified element, not just the first level down.

// const $items = $('.myList').find('li');
// The .find() method takes a parameter that specifies how to filter results. This parameter is just like anything you might use to select a jQuery object, ('#id', '.class', tag, etc.). .find() will return all descendants that match the passed in selector. In the example above, the .find() method will return all <li> child elements inside the '.myList' element.



$(document).ready(() => {
  
    $('.more-details-button').on('click', event => {
      $(event.currentTarget).closest('.product-details').next().toggle();
       $(event.currentTarget).find('img').toggleClass('rotate')
    });  
    
    $('.shoe-details li').on('click', event => {
      $(event.currentTarget).addClass('active');
      
      $(event.currentTarget).siblings().removeClass('active')
      
      $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
      
      
    });
    
    
    
    ///////////////////////////////////////////
    $('.login-button').on('click', () => {
      $('.login-form').toggle();
      $('.login-button').toggleClass('button-active');
    });
  
    $('.product-photo').on('mouseenter', () => {
      $(this).addClass('photo-active');
    }).on('mouseleave', function() {
      $(this).removeClass('photo-active');
    });
  
    $('.menu-button').on('click', () => {
      $('.menu-button').toggleClass('button-active');
      $('.nav-menu').toggleClass('hide');
    });
  })