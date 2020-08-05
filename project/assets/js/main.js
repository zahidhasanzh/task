(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        // modal video
        $(".video_play_btn").modalVideo();

        $(".video_play_btn").on("click", function () {
            return false;
        });

        // client testimonial
        $(".testimonial_active").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            margin: 0,
            dots: true,
            autoplay: false,
            responsive: {
                0: {
                    items: 1,
                },
                767: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
            },
        });

        // brand testimonial
        $(".brand_active").owlCarousel({
            items: 5,
            loop: true,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
            nav: true,
            margin: 0,
            dots: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                767: {
                    items: 3,
                },
                992: {
                    items: 5,
                },
            },
        });

        // mobile menu
        $("#mobile_menu").meanmenu({
            meanMenuContainer: ".mobile_menu",
            meanScreenWidth: "992",
        });



        // header sticky

        // $(window).on("scroll", function () {
        //     var scroll = $(window).scrollTop();
        //     if (scroll < 245) {
        //         $("#header_sticky").removeClass("sticky_bar");
        //     } else {
        //         $("#header_sticky").addClass("sticky_bar");
        //     }
        // });
        //scroll menu
        $(window).scroll(function () {
            var top = $(window).scrollTop();
            if (top >= 60) {
                $(".header_area").addClass('secondary');
            }
            else
                if ($(".header_area").hasClass('secondary')) {
                    $(".header_area").removeClass('secondary');

                }
        });

        //logo change


        // One Page Nav
        if ($(".header_area").length) {
            var top_offset = $("header_area").height() + 82;
            $(".main_menu nav ul").onePageNav({
                currentClass: "active",
                scrollOffset: top_offset,
            });
        }

        // sticky nav
        if ($("#firefly").length) {
            $.firefly({
                color: "#000",
                minPixel: 3,
                maxPixel: 5,
                total: 30,
                on: "#firefly",
            });
        }
    });

    // testimonial slick

    $('.testimonia_item_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        asNavFor: '.testimonial_nav'
    });
    $('.testimonial_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonia_item_active',
        dots: false,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0
    });

    // language option


    jQuery(window).load(function () {
        // preloader
        $(".spinner").fadeOut();
        $(".body_preloader_wrap").delay(450).fadeOut("slow");
    });
})(jQuery);
