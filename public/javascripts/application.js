(function($) {
  // navbar appear on scroll
  $(window).scroll(function() {
    var navAppearHeight = 550;

    if (window.innerWidth <= 768) {
      navAppearHeight = 155;
    }

    if($(this).scrollTop() > navAppearHeight) {
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
    fadeInContactForm();
  });

  $(".hire-cta").click(function() {
    fadeInContactForm();
  });

  function fadeInContactForm() {
    $("#call-to-action").removeClass("fade-in");
    $("#contact-form").addClass("fade-in");
    $("#name").focus();
  }

  // testimonial carousel
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    pagination: true,
    navText:["",""],
    autoPlay: false,
    margin: 10
  });
})(jQuery);
