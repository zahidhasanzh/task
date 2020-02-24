
(function ($) {
	"strict";


$(document).ready(function($){
	$('.project-titels li').on('click',function(){
		$(".project-titels li").removeClass("active")
		$(this).addClass("active");
			var selector =$(this).attr('data-filter');
	 	$(".new-projects-list").isotope({
	 		filter:selector
		});
	});
	});

var $grid = $('.new-projects-list').isotope({
  // options
});




}(jQuery));