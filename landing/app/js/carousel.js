$(document).ready(function() {
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 0,
        infiniteLoop: true,
        // slideWidth: 0,
        minSlides: 1,
        maxSlides: 1,
        speed: 500,
        controls: true,
        responsive: true,
        auto: true,
        pause: 5000
    });
});