

$(document).ready(function($){

	$(".slide-area").owlCarousel({

		items:1,
		nav:false,
		dots:true,
		loop:true,
		autoplay:false
	});

	$(".logo-carousel").owlCarousel({

		margin:30,
		nav:false,
		dots:false,
		loop:true,
		autoplay:false,
		responsive : {

		    0 : {
		        items:1
		    },

		    768 : {
		        items:3
		    },

		    992 : {
		        items:5		    }
		}
	});

});


//SCROLL-BEHAVIOR

$("a").on('click',function(event){

    if(this.hash !== ""){
        event.preventDefault();
        var hash=this.hash;

        $('html,body').animate({
            scrollTop:$(hash).offset().top},
            800,function(){
                window.location.hash=hash;
        })
    }

});

 	//STICKY MANU
    $(".js--services-section").waypoint(function(direction){
    	if (direction == "down"){
    		$(".header-area").addClass("sticky");

    	}else{
    		$(".header-area").removeClass("sticky");
    	}
    });

    // ACTIVE MENU

   $("ul li a").click(function(){
   	 $("ul li a").removeClass("active");
   	 $(this).addClass("active");
   })
	
	 //MOBILE MANU
		 function openNav(){
		    document.getElementById("myNav").style.width ="100%";
		 }
		  function closeNav(){
		    document.getElementById("myNav").style.width ="0";
		 }

