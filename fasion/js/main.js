$(document).ready(function(){

	$('.product-list').masonry();

		$(".hompages-slider").owlCarousel({
		items:1,
		autoplay:false,
		loop:true,
		dots:false,
		nav:true,
    	navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
	});

	$(".product-promotions").owlCarousel({
		items:1,
		autoplay:false,
		loop:true,
		dots:true,
		nav:false,
	});

	$(".menu-trigger").on("click", function(){
		$(".off-canver-menu, .off-canver-overlay").addClass("active");
		return false;
	});

	$(".menu-close, .off-canver-overlay").on("click", function(){
		$(".off-canver-menu, .off-canver-overlay").removeClass("active");
	});

});