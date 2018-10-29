(function($) {
    "use strict";

      // sticky header
      $(window).on('scroll',function() {  
       var scroll = $(window).scrollTop();
       if (scroll < 1) {
        $(".sticky").removeClass("scroll-header");
       }else{
        $(".sticky").addClass("scroll-header");
       }
      });

      // mobile menu active
    $('.main-menu').slicknav({
      brand:'<img src="img/logo/logo.png" alt="" />',
      prependTo:'.header-area'
    });

    // nivo side active
    $('#slider').nivoSlider({
    	manualAdvance: false,
    	controlNav: false,
    	prevText: '<i class="fas fa-angle-left"></i>',
    	nextText: '<i class="fas fa-angle-right"></i>',
    });

    // wow js active
    new WOW().init();

    // product banner mesonary
    $('.banner-active').isotope({
      itemSelector: '.banner-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.banner-item'
      }
    });

    // product active
    $('.product-active').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            481:{
                items:2
            },
            769:{
                items:3
            },
            991:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });

    // product active
    $('.brand-active').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        smartSpeed:500,
        nav:false,
        responsive:{
            0:{
                items:3
            },
            481:{
                items:5
            },
            769:{
                items:5
            },
            991:{
                items:5
            },
            1200:{
                items:5
            }
        }
    });

    // testimonial active
    $('.testimonial-area').owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            769:{
                items:1
            },
            991:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    $('.header-right ul li .fa-search').on('click', function(event){
      $('.header-search input').toggleClass('show');
      event.preventDefault();
    });

    // fancybox jquery
    $('[data-fancybox="gallery"]').fancybox({
      protect: true,
      buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          "download",
          "thumbs",
          "close"
        ],
        animationEffect: "zoom-in-out",
        transitionEffect: "zoom-in-out",
        loop: true,
    });
    
    
}(jQuery));