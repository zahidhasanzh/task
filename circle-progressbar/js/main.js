(function ($) {
	"strict";

$(document).ready(function($){

	$("#web-designprogressbar").circleProgress({

		value:.90,
		size:200,
		fill:'#59D1D5',
		thickness:2,
		emptyFill:'#fff'
		}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-precentage').html(Math.round(90 * progress) + '<i>%</i>');
  });

	$("#graphic-designprogressbar").circleProgress({

		value:.70,
		size:200,
		fill:'orange',
		thickness:2,
		emptyFill:'#fff'
		}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-precentage').html(Math.round(70 * progress) + '<i>%</i>');
  });

	$("#digital-marketingprogressbar").circleProgress({

		value:.65,
		size:200,
		fill:'blue',
		thickness:2,
		emptyFill:'#fff'
		}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-precentage').html(Math.round(65 * progress) + '<i>%</i>');
  });

});

	


jQuery(window).load(function(){

});

}(jQuery));