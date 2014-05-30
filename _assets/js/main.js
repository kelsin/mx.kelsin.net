$(function() {
  $.stellar({ horizontalScrolling: false,
              positionProperty: 'transform',
              hideDistantElements: false,
              responsive: true });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 400) {
      $('#content').css({'margin-top': $('nav').outerHeight() + 'px'});
      $('#content > .post .meta').css({'top': (scroll - 400) + 'px'});
      $('header + nav').css({position: 'fixed'});
    } else {
      $('#content').css({'margin-top': '0'});
      $('#content > .post .meta').css({'top': '0'});
      $('header + nav').css({position: 'relative'});
    }
  });

  $('#tags').masonry({
    columnWidth: 220,
    gutter: 20,
    itemSelector: '.tag'
  });

  $('.post .body p:has(a img)').each(function(index, elements) {
    $(elements).find('a').colorbox({ rel: 'gallery-' + index });
  });
});
