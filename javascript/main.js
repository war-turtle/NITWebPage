$(document).ready(function(){
  $('.parallax').parallax();
  $('.button-collapse').sideNav();
  $('.slider').slider();
  $('.btn').sideNav();
});


//            own javascript

var navbar = document.getElementsByClassName("navbar")[0];
var go = navbar.offsetTop;

function scroller() {
    var ypos = window.pageYOffset;
    if(ypos >= go)
        {
            navbar.style.background="white";
            navbar.style.position="fixed";
            navbar.style.top="0";
        }
    else
        {
            navbar.style.background="transparent";
            navbar.style.position="absolute";
            navbar.style.top=go+"px";
        }
}
addEventListener("scroll",scroller);
