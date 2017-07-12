(function($) {
  $(document).ready(function() {
    $(window).scroll(function() {
      // USE AN ANIMATION INSTEAD DOGGY
      if($(this).scrollTop() > 550) {
        $("#nav").fadeIn(100);
      } else {
        $("#nav").fadeOut(100);
      }
    });
  });
})(jQuery);
