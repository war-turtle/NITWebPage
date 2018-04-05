$(document).ready(function(){
  $('.parallax').parallax();
  $('.slider').slider();

  $('.tabs').tabs();

  $('.sidenav').sidenav();

  $('.sidenav-trigger').click(function(){
    $('.sidenav').sidenav('close');
  });

});

// rendering google maps

function initMap() {
  var uluru = {lat: 29.948, lng: 76.817};
  var map = new google.maps.Map(document.querySelector('#map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

//            own javascript

var navbar = document.getElementsByClassName("navbar")[0];
var go = navbar.offsetTop;

function scroller() {
    var ypos = window.pageYOffset;
    if(ypos >= go)
        {
            // navbar.style.background="#c8e6c9a";
            navbar.style.position="fixed";
            navbar.style.top="0";
        }
    else
        {
            // navbar.style.background="#fffa";
            navbar.style.position="absolute";
            navbar.style.top=go+"px";
        }
}
addEventListener("scroll",scroller);
