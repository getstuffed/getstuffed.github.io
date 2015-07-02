
// Navbar
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navigation-bar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 600) {
                $('.navigation-bar').fadeIn();
            } else {
                $('.navigation-bar').fadeOut();
            }
        });
    });

});
  }(jQuery));

// Smooth scroll navigation
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Facebook feed
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.3&appId=760144117436748";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

// Instagram feed
(function() {
  var feed = new Instafeed({
      get: 'user',
      userId: 451652220,
      accessToken: '451652220.467ede5.81672fbc05d54fd789c47d04fb0816fa',
      clientId: 'b9b73a5961404f81b47e3dd4d1af2e19',
      template: '<div class="instafeed-image-container"><a href="{{link}}"><img src="{{image}}" /></a></div>',
      resolution: 'low_resolution',
      limit: 60
  });
  feed.run();
})();

