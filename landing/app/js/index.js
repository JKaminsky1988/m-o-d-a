// menu
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

//sticky menu
$(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= 420) {
			$('nav.navbar').addClass('sticky-top-nav');
		}
		else{
			$('nav.navbar').removeClass('sticky-top-nav');
		}
	});
});


// textarea height
$(document).ready(function() {
    $('.form-input-bl').on('change keyup keydown paste cut', 'textarea', function() {
        $(this).height(0).height(this.scrollHeight);
    }).find('textarea').change();
});


// animate activation
$(window).scroll(function() {
    // 1
    $('.animating-btn').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + 500) {
            $(this).addClass('animBtn');
        }
    });

    // 2
    $('.animating-img-right').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + 800) {
            $(this).addClass('animImgRight');
        }
    });

    // 4
    $('.animating-img-left').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + 800) {
            $(this).addClass('animImgLeft');
        }
    });
});