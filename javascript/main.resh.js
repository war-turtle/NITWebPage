var $car,$close_btn;
$(function(){
    //init-materialbox
    $(".materialboxed").materialbox();
    //init-slider-carousel
    $(".slider").slider();
    //init-parallax
    $('.parallax').parallax();
    //tab
    $(".tabs").tabs({swipeable:true});
    //carousel
    $(".carousel").carousel();
    //
    
    
    
        
        $(".carousel_img").carousel();
        $car = $(".carousel_img").detach();
        
        function addcar()
        {
            $(".gallery_view").append($car);
            $close_btn = $(".gallery_close").detach();
        }
        function removecar()
        {
            $car=$('.carousel_img').detach();
            $(".gallery_view").append($close_btn)
        }
        $(".gallery_view").materialbox({'onOpenStart':addcar, 'onCloseStart':removecar});
        
    
});

