$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    // Background
    var headerOffset = Math.max(0, Math.round(scroll / 2.0));
    var footerOffset = 100 + Math.max(0, Math.round(($(document).height() - $(window).height() - scroll) / 2.0));
    $('header').css({ 'background-position': 'center ' + headerOffset + 'px' });
    $('footer').css({ 'background-position': 'center -' + footerOffset + 'px' });

    // Fixed Items
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
    $(elements).find('a').colorbox({
      rel: 'gallery-' + index,
      maxWidth: '95%',
      maxHeight: '95%'
    });
  });
});
