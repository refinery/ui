// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require wysihtml5
//= require_tree .
//= require_self

$(function() {

  $('a.folding').live('click', function(e) {
    e.preventDefault();
    $('div.folding', $(this).parent()).slideToggle();
  });

  $('#nav li.current > ul').slideToggle();
  $('#nav > ul > li').live('click', function(e) {
    e.preventDefault();
    $this = $(this);
    if (!$this.hasClass('current')) {
      $('#nav li.current').removeClass('current').children('ul').css('display', 'none');
      $(this).addClass('current').children('ul').slideToggle();
    }
  });


});
