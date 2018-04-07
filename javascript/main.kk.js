$(document).ready(function(){
  $('.parallax').parallax();
  $('.slider').slider();
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();

  $('.dropdown-trigger').dropdown({
    constrainWidth: false,
    coverTrigger: false,
    hover: false
  });


  var offsetTop = $('.navbar').offset().top;

  $(window).scroll(function(){
    if($(window).scrollTop() > offsetTop){
      $('.navbar').addClass('nav-fixed');
    } else {
      $('.navbar').removeClass('nav-fixed');
    }
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
