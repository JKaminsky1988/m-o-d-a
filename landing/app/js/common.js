// body fade In


// menu
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

//sticky menu
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 555) {
            $('nav.navbar').addClass('sticky-top-nav');
            $('body').addClass('menu_place');
        } else {
            $('nav.navbar').removeClass('sticky-top-nav');
            $('body').removeClass('menu_place');
        }
    });
});


// textarea height
$(document).ready(function() {
    $('.user_comment_bl').on('change keyup keydown paste cut', 'textarea', function() {
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

// dynamic link TOfolio TOprise
$(document).ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $(hash).addClass('in');
        $a = $($(this).attr('href'));
        $('html,body').scrollTop() + 200;
        return false;
    }
});