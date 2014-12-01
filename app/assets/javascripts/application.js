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

$(window).resize(function() {
    var div = $('#news_container');
    var imageDiv = $('#imageMenu #banner');
    var title = $('#imageMenu #banner h2');
    var height = imageDiv.height();

    title.class('width', height);
});

jQuery.fn.redraw = function() {
    return this.hide(0, function(){jQuery(this).show()});
};

jQuery(document).ready(function() {
    jQuery('body').redraw();
});

