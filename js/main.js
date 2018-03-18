
// Navbar animation
$(function () {
  $(window).scroll(function () {
      // set distance user needs to scroll before we start fadeIn
      if ($(this).scrollTop() > 600) {
          $('.navigation-bar').addClass('show');
      } else {
          $('.navigation-bar').removeClass('show');
      }
  });
});

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

(function() {
  var timeInterval = 2000; // milliseconds
  var adjectives = [ 'charming', 'delicious', 'exciting', 'seasonal', 'wholesome' ];
  var carousel = $('.adjective-carousel');
  var carouselTray = $('.adjective-carousel-tray');

  function addAdjective(adjective) {
      var heading = document.createElement('h2');
      heading.innerText = adjective;
      carouselTray.append(heading);
  }

  function incrementTopPosition() {
     var spacing = 75;
     var prevPosition = carouselTray.position().top;
     var nextPosition = prevPosition - spacing;
     carouselTray.css('top', nextPosition + 'px' );
  }

  function changeWidth() {
     var newWidth = carouselTray.children().last().css('width');
     carousel.css('width', newWidth);
  }

  function goToNextAdjective(index) {

    var adjective = adjectives[index];

    addAdjective(adjective);
    window.requestAnimationFrame(incrementTopPosition);
    window.requestAnimationFrame(changeWidth);

    var indexPlusOne = index + 1;
    var nextIndex = adjectives[indexPlusOne] ? indexPlusOne : 0;

    setTimeout(function() {goToNextAdjective(nextIndex)}, timeInterval);
  }

  $(document).ready(function() {setTimeout(function() {goToNextAdjective(1)}, timeInterval)});

})();

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

})();

// Copywright date
(function() {
  var date = new Date();
  var fullYear = date.getFullYear();
  $('#copywright-date').text(fullYear);
})()
