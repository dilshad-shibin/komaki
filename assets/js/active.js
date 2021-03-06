// Index of jQuery Active Code

(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 1.0 NAVIGATION MENU ACTIVE CODE
    function navMenu() {

        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').click(function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').click(function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();

    // :: 2.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 3.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // SCROLLSPY ACTIVE CODE
    $('body').scrollspy({
        target: ''
    });

    // :: 4.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 5.0 AOS ACTIVE CODE
    AOS.init();

    // :: 6.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 7.0 Banner SLIDER ACTIVE CODE
    $('.welcome-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 4000,
        // navText: ["<img src='assets/img/bg/left-side.png'>","<img src='assets/img/bg/lefts-side.png'>"],
        navText: [
            "<img src='assets/img/bg/left-side.png'> Prev",
            "Next <img src='assets/img/bg/left-side.png'>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1,
                nav: false
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // :: 7.0 Speed SLIDER ACTIVE CODE
    $('.speed-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 4000,
        navText: [
            "<img src='assets/img/bg/scroll-icon.png'> Scroll",
            "<img src='assets/img/bg/scroll-icon.png'>"
        ],
        responsive: {
            0: {
                items: 1.1,
                margin: 10
            },
            576: {
                items: 1.3
            },
            768: {
                items: 2.2
            },
            992: {
                items: 2.5
            }
        }
    });

     // :: 7.0 Review SLIDER ACTIVE CODE
     $('.review-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 4000,
        // navText: [
        //     "<img src='assets/img/bg/scroll-icon.png'> Scroll",
        //     "<img src='assets/img/bg/scroll-icon.png'>"
        // ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

}(jQuery));