
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
      userId: 1449762964,
      accessToken: '1449762964.923800a.0564e92ef3254313ad1c4f9d9c1f595e',
      clientId: '923800aaa0324d0db76da21db084d5dc',
      template: '<div class="instafeed-image-container"><a href="{{link}}"><img src="{{image}}" /></a></div>',
      resolution: 'low_resolution',
      limit: 60
  });
  feed.run();

// Animate ctas
var ctas = document.getElementsByClassName('cta-primary'),
    addClass = function(){this.classList.add('animated','swing')},
    removeClass = function(){this.classList.remove('animated','swing')};

for (var i = ctas.length - 1; i >= 0; i--) {
  if (ctas[i].parentNode.parentNode.classList[0] !== 'navigation-item') {
    ctas[i].addEventListener('mouseenter', addClass, false);
    ctas[i].addEventListener('mouseleave', removeClass, false);
  }
};

})();

