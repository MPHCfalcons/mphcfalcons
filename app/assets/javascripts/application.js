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
//= require_tree .

// Sticks header to to of page after scrolled past
var num = 50; //number of pixels before modifying styles (size of top pic)

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.headerContainer').addClass('fixed');
    } else {
        $('.headerContainer').removeClass('fixed');
    }
});

  $(".imageMenuItem").click(
    function(event) {
      event.preventDefault();
      console.log($(event.currentTarget));
      $(event.currentTarget).addClass('imageMenuItemOpen');
      $(event.currentTarget).nextAll().addClass('imageMenuItemClosedRight');
      $(event.currentTarget).prevAll().addClass('imageMenuItemClosedLeft');

    }
  );

//function transition(e) {
  //e.preventDefault();
  //console.log('here');
//}

// The speed of one transition (fadeIn or fadeOut).
// Full execution time will be:
// (browser navigation time) + speed * 2;
// You can set this to slow, medium, fast, or number of ms.
//var speed = 'slow';

//$('html, body').hide();
//$(document).ready(function() {
    //$('html, body').fadeIn(speed, function() {
        //$('a[href], button[href]').click(function(event) {
            //var url = $(this).attr('href');
            //if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            //event.preventDefault();
            //$('html, body').fadeOut(speed, function() {
                //window.location = url;
            //});
        //});
    //});
//});
