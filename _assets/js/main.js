$(function() {
  $.stellar({ horizontalScrolling: false,
              positionProperty: 'transform',
              hideDistantElements: false,
              responsive: true });

  $(window).scroll(function() {
    if($(window).scrollTop() >= 400) {
      $('#content').css({'margin-top': $('nav').outerHeight() + 'px'});
      $('nav').css({position: 'fixed'});
    } else {
      $('#content').css({'margin-top': '0'});
      $('nav').css({position: 'relative'});
    }
  });
});
