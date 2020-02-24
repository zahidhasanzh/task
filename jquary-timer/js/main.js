

$(document).ready(function($){

	$('#clock').countdown('2020/10/10', function(event) {
    $(this).html(event.strftime('<span class="countdown-wrap"><span class="single-countdown-item">%w <br/> <span>Weeks</span></span><span class="single-countdown-item">%d<br/><span>Days</span></span><span class="single-countdown-item">%H <br/><span>Hours</span></span><span class="single-countdown-item">%M <br/><span>Minutes</span></span><span class="single-countdown-item">%S <br/><span>Seconds</span></span> </span>'));
});

	
});

