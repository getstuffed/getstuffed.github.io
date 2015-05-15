// Facebook feed

window.fbAsyncInit = function() {
    
    FB.init({
    appId      : '760144117436748',
    xfbml      : true,
    version    : 'v2.3'
    });

    

    FB.api(
        "/getstuffedcateringco/feed",
        function (response) {
            console.log(response);
            if (response && !response.error) {
            /* handle the result */
            }
        }
    );

};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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