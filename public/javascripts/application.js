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

    // DO THIS SHIT W CSS MY G
    $("#convert").click(function(e) {
      e.preventDefault();

      $("#call-to-action").hide();
      $("#contact-form").show();
      $("#name").focus();
    });
  });
})(jQuery);
