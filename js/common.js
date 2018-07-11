$(function() {
  // Custom JS
  $(".nav-hamburger").on("click", function() {
    $(".hamburger").toggleClass("is-active");
    $(".nav-links").toggleClass("nav-show-links");
    $(".blur-screen").toggleClass("blur");
    $("body").toggleClass("stop-scroll");
    $(".overlay").toggle();
    // Do something else, like open/close menu
  });
  $(document).click(function(event) { 
    if(!$(event.target).closest('#my-nav').length) {
        if($('.hamburger').is(".is-active")) {
          $(".hamburger").toggleClass("is-active");
          $(".nav-links").toggleClass("nav-show-links");
          $(".blur-screen").toggleClass("blur");
          $("body").toggleClass("stop-scroll");
          $(".overlay").toggle();
        }
    }        
  });
});
