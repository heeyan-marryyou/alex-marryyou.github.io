/* =================================
   LOADER
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
})

/* =================================
===  STICKY NAV                 ====
=================================== */

// $(document).ready(function() {
//   $('.main-navigation').onePageNav({
//     scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
//     scrollOffset: 60 //Height of Navigation Bar
//   });
// 
// });
//
// /* NAVIGATION VISIBLE ON SCROLL */
//
// $(document).ready(function () {
//     mainNav();
// });
//
// $(window).scroll(function () {
//     mainNav();
// });
//
// if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
//   function mainNav() {
//         var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//         if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});
//
//         else $('.sticky-navigation').stop().animate({"top": '-60'});
//     }
// }
//
// if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
//   function mainNav() {
//         var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//         if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});
//
//         else $('.sticky-navigation').stop().animate({"top": '-120'});
//     }
// }

/* =================================
===  DOWNLOAD BUTTON CLICK SCROLL ==
=================================== */
jQuery(function( $ ){
			$('#download-button').localScroll({
				duration:1000
			});
		});

/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura);

}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});


/* =================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});


/* =================================
===  WOW ANIMATION             ====
=================================== */

wow = new WOW(
  {
    mobile: false
  });
wow.init();


/* =================================
===  STELLAR                    ====
=================================== */
$(window).stellar({
horizontalScrolling: false
});


/* =================================
===  IE10 ON WINDOWS 8 FIX      ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
