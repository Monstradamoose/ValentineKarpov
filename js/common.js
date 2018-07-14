$(function() {
  // Custom JS
  $(".nav-hamburger").on("click", function() {
    $(".hamburger").toggleClass("is-active");
    $(".nav-links").toggleClass("nav-show-links");
    $("body, html").toggleClass("stop-scroll");
    $(".navbar").toggleClass("all-height")
    // Do something else, like open/close menu
  });
  $(document).click(function(event) { 
    if(!$(event.target).closest('#my-nav').length) {
        if($('.hamburger').is(".is-active")) {
          $(".hamburger").toggleClass("is-active");
          $(".nav-links").toggleClass("nav-show-links");
          $("body, html").toggleClass("stop-scroll");
          $(".navbar").toggleClass("all-height")
        }
    }        
  });
});
