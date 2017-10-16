$(document).ready(function() {

	// SCROLLED
	$(window).scroll(function() {
		$('.header-video').toggleClass('header-video-scrolled', $(this).scrollTop() > 0);
		$('.header').toggleClass('header-scrolled', $(this).scrollTop() > 0);
	});


	// RESPONSIVE MENU
	$('.responsive-button').click(function() {
		$('#responsive-menu').addClass('responsive-menu-show');
	});
	$('.responsive-button-close').click(function() {
		$('#responsive-menu').removeClass('responsive-menu-show');
	});


	// TESTIMONIALS
	$("#cslide-slides").cslide();


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});


});