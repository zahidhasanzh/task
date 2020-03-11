(function ($) {
	"strict";

$(document).ready(function($){

	$(".slide-area").owlCarousel({

		items:1,
		nav:false,
		dots:true,
		loop:true,
		autoplay:true,
	});

	$(".logo-carousel").owlCarousel({

		items:5,
		margin:30,
		nav:false,
		dots:false,
		loop:true,
		autoplay:false,
	});

});

jQuery(window).load(function(){

});

}(jQuery));