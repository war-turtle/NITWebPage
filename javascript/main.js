$(document).ready(function(){
  $('.parallax').parallax();
  // $('.button-collapse').sideNav();
  $('.slider').slider();

  // $('.sidenav').sidenav();

  $('.tabs').tabs();

  $('.sidenav').sidenav();

  $('.tab a').click(function(){
    $('.sidenav').sidenav('close');
  });
});


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
