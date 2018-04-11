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

  function slidingDropDown(element){
    var id = element.id;

    if($('#'+id).css('display') == 'block'){
      $('#'+id).slideUp(500);
      return;
    }

    $('.submenu-container').map(function(ele){
      var e = $('.submenu-container')[ele];



      if(e.id == id){
        $('#'+id).slideDown(500);
      } else {
        $('#'+e.id).slideUp(500);
      }

    });


    // console.log(document.querySelectorAll('.submenu-container'));
    // $('.submenu-container').slideUp(500,function(){
    //   console.log('kartik');
    //   $('#'+id).slideDown(500);
    // });
    // if($('.submenu-container').css)
    // console.log($('.submenu-container'));
    // $('.submenu-container').map(function(ele){
    //   console.log($('.submenu-container')[ele]);
    // });
  }

  $('.navbar .nav-wrapper ul li').click(function(e){
    slidingDropDown(e.target.nextElementSibling);
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
