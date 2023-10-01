"user strict";

$( document ).ready(function() {
    /* Owl Carousel Slider*/
$('.partner-slider').owlCarousel({
    loop:true,
    margin:30,
    smartSpeed: 600,
      autoplayTimeout:2000,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        430:{
          items:2
      },
      767:{
          items:3
      },
      991:{
          items:3
      },
        1199:{
            items:4
        }
    }
  })
  $('.customer-wrapper').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    nav: true,
    smartSpeed: 600,
      autoplayTimeout:3000,
    responsiveClass:true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
  ],
    responsive:{
        0:{
            items:1
        },
        500:{
          items:1
      },
        767:{
            items:1
        },
        991:{
          items:1
      },
      1199:{
          items:1
      },
        1399:{
            items:1
        }
    }
  })
  $('.tweet-slider').owlCarousel({
      loop: true,
      margin:30,
      smartSpeed: 600,
      autoplayTimeout:2000,
      autoplay: true,
      nav: true,
      responsiveClass:true,
      navText: [
          '<i class="fas fa-arrow-left"></i>',
          '<i class="fas fa-arrow-right"></i>'
      ],
      responsive:{
          0:{
              items:1
          },
          500:{
            items:1
        },
          767:{
              items:2
          },
          991:{
            items:2
        },
        1199:{
            items:3
        },
          1399:{
              items:4
          }
      }
  })
  $('.main-hosting-wrapper').owlCarousel({
      loop:true,
      margin:30,
      autoplay: true,
      nav: true,
      smartSpeed: 600,
      autoplayTimeout:2000,
      rtl: true,
      lazyLoad:true,
      responsiveClass:true,
      navText: [
          '<i class="fas fa-angle-double-right"></i>',
          '<i class="fas fa-angle-double-left"></i>'
      ],
      responsive:{
          0:{
              items:1
          },
          500:{
            items:1
        },
          767:{
              items:2
          },
          991:{
            items:2
        },
        1199:{
            items:3
        },
          1399:{
              items:4
          }
      }
  })
  $('.main-hosting-wrappertwo').owlCarousel({
      loop:true,
      margin:30,
      autoplay: true,
      nav: false,
      smartSpeed: 600,
      autoplayTimeout:2000,
      responsiveClass:true,
      navText: [
          '<i class="fas fa-arrow-left"></i>',
          '<i class="fas fa-arrow-right"></i>'
      ],
      responsive:{
          0:{
              items:1
          },
          500:{
            items:1
        },
          767:{
              items:2
          },
          991:{
            items:2
        },
        1199:{
            items:3
        },
          1399:{
              items:4
          }
      }
  })
  $('.pricing-customize-wrapper').owlCarousel({
      loop:true,
      margin:0,
      autoplay: true,
      responsiveClass:true,
      smartSpeed: 600,
      autoplayTimeout:2000,
      responsive:{
          0:{
              items:1
          },
          500:{
            items:2
        },
          767:{
              items:2
          },
          991:{
            items:3
        },
          1199:{
              items:4
          }
      }
  })
  $('.pricing-customize-wrapperfour').owlCarousel({
      loop:true,
      margin:0,
      autoplay: true,
      responsiveClass:true,
      smartSpeed: 600,
      autoplayTimeout:2000,
      responsive:{
          0:{
              items:1
          },
          500:{
            items:2
        },
          767:{
              items:2
          },
          991:{
            items:3
        },
          1199:{
              items:6
          }
      }
  })
  $('.client-slider').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    responsiveClass:true,
    setTimeout: 2000,
    smartSpeed: 600,
      autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        500:{
          items:1
      },
        767:{
            items:1
        },
        991:{
          items:1
      },
        1199:{
            items:1
        }
    }
  })
  /* Owl Carousel Slider*/
  
  
  /* Tab Section Js area */
 //js code for mobile menu 
 $('.header-bar').on('click', function(e) {
    $('.main-menu, .header-bar').toggleClass('active');
});
$(".main-menu li a").on("click", function (e) {
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(300, "swing");
    } else {
        element.addClass("open");
        element.children("ul").slideDown(300, "swing");
        element.siblings("li").children("ul").slideUp(300, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(300, "swing");
    }
});
//js code for mobile menu
//menu top fixed start
var fixed_top = $(".header-section");
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 220) {
        fixed_top.addClass("menu-fixed animated fadeInDown");
        fixed_top.removeClass("slideInUp");
        $('body').addClass("body-padding");
    } else {
        fixed_top.removeClass("menu-fixed fadeInDown");
        fixed_top.addClass("slideInUp"); 
        $('body').removeClass("body-padding");
    }
});

// Click event to scroll bar start
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

//Click event to scroll to top
$('.scrollToTop').on("click", function () {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});
//Click event to scroll to top end

// counter
$(".odometer-item").each(function () {
    $(this).isInViewport(function (status) {
    if (status === "entered") {
        for (
        var i = 0;
        i < document.querySelectorAll(".odometer").length;
        i++
        ) {
        var el = document.querySelectorAll(".odometer")[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
        }
    }
    });
});

//Wow Animation
new WOW().init(); 


//top botm
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("valu");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 250) / calcHeight);
    
    if (pos > 250){
        scrollProgress.style.display = "grid";
    } else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    }); 
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//Preloader
setTimeout(function(){
    $('#preloader').fadeToggle();
}, 500);


});

