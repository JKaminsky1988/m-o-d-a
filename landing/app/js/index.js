// menu
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

//sticky menu
$(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= 380) {
			$('nav.navbar').addClass('sticky-top-nav');
		}
		else{
			$('nav.navbar').removeClass('sticky-top-nav');
		}
	});
});