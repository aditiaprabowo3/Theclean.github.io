$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});



$(window).scroll(function(){
    if($(window).scrollTop()) {
        $(".navbar").addClass("putih");
    }
    else {
        $(".navbar").removeClass("putih");
    }
});