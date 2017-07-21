(function($) {
  // navbar appear on scroll
  $(window).scroll(function() {
    if($(this).scrollTop() > 550) {
      $("#nav").addClass("visible");
    } else {
      $("#nav").removeClass("visible");
    }
  });

  // navbar dropdown
  $("#show-menu").click(function() {
    if (this.checked) {
      $("#down").hide();
      $("#up").show();
    } else {
      $("#up").hide();
      $("#down").show();
    }
  });

  // close menu when nav anchor link clicked (mobile)
  $("#menu a").click(function() {
    if ($(".show-menu").is(":visible")) {
      console.log("BITCH");
      setTimeout(function() {
        $("#show-menu").prop("checked", false);
        $("#up").hide();
        $("#down").show();
      }, 200);
    }
  });

  // contact form fade in
  $("#convert").click(function(event) {
    event.preventDefault();
    $("#call-to-action").removeClass("fade-in");
    $("#contact-form").addClass("fade-in");
    $("#name").focus();
  });
})(jQuery);
