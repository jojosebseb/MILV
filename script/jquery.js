//slick
$(document).ready(function(){
  $('.top-slider').slick({
     infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: true,
  });
});
$(document).ready(function(){
  $('.second-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      prevArrow: $('.arrow-prev'),
      nextArrow: $('.arrow-next'),
      responsive: [
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }]
  });
});
$(document).ready(function(){
  $('.main-section-right-4').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: true,
      responsive: [
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               vertical: false,
               verticalSwiping: false,
            }
         },
         {
   			breakpoint: 600,
   			settings: {
   				slidesToShow: 1,
   				slidesToScroll: 1,
               vertical: true,
               verticalSwiping: true,
   			}
   		},
      ]
  });
});
//slick
//initvars
var win = $(window);
//initvars


if ($(window).width() > 900){

   //first section
   win.on('scroll', function(){
     var topscroll = win.scrollTop()/2;
     fSectionRight.css('transform', 'translateY(' + topscroll + 'px)');
     fSectionLeft.css('transform', 'translateY(-' + topscroll + 'px)');
     if (win.scrollTop() >1300) {
         fSectionRight.addClass('jquery-hide');
         fSectionLeft.addClass('jquery-hide');
      }else{
         fSectionRight.removeClass('jquery-hide');
         fSectionLeft.removeClass('jquery-hide');
      }
   });
   //first section


   //main-section-1
   var mSectionLeft1 = $('.main-section-left-1');
   var mSectionRight1 = $('.main-section-right-1');

   win.on('scroll', function(){
     var topscroll = win.scrollTop()/2;
     mSectionLeft1.css('transform', 'translateY(' + topscroll + 'px)');
     mSectionRight1.css('transform', 'translateY(-' + topscroll + 'px)');
     if (win.scrollTop() >1300) {
         mSectionLeft1.addClass('jquery-show');
         mSectionRight1.addClass('jquery-show');
      }else{
         mSectionLeft1.removeClass('jquery-show');
         mSectionRight1.removeClass('jquery-show');
      }
   });
   //main-section-1

   //main-section-2
   var mSectionLeft2 = $('.main-section-left-2');
   var mSectionRight2 = $('.main-section-right-2');

   win.on('scroll', function(){
     var topscroll = win.scrollTop()/2;
     mSectionLeft2.css('transform', 'translateY(' + topscroll + 'px)');
     mSectionRight2.css('transform', 'translateY(-' + topscroll + 'px)');
     if (win.scrollTop() >1800) {
         mSectionLeft1.removeClass('jquery-show');
         mSectionRight1.removeClass('jquery-show');
         mSectionLeft2.addClass('jquery-show');
         mSectionRight2.addClass('jquery-show');
      }else{
         mSectionLeft2.removeClass('jquery-show');
         mSectionRight2.removeClass('jquery-show');
      }
   });
   //main-section-2

   //main-section-3
   var mSectionLeft3 = $('.main-section-left-3');
   var mSectionRight3 = $('.main-section-right-3');

   win.on('scroll', function(){
     var topscroll = win.scrollTop()/2;
     mSectionLeft3.css('transform', 'translateY(-' + topscroll + 'px)');
     mSectionRight3.css('transform', 'translateY(' + topscroll + 'px)');
     if (win.scrollTop() >2500) {
         mSectionLeft2.removeClass('jquery-show');
         mSectionRight2.removeClass('jquery-show');
         mSectionLeft3.addClass('jquery-show');
         mSectionRight3.addClass('jquery-show');
      }else{
         mSectionLeft3.removeClass('jquery-show');
         mSectionRight3.removeClass('jquery-show');
      }
   });
   win.on('scroll', function(){
     var topscroll = win.scrollTop()/2;
     if (win.scrollTop() >3200) {
        mSectionLeft3.removeClass('jquery-show');
        mSectionRight3.removeClass('jquery-show');
      }
   });
   //main-section-3

}
var fSectionLeft = $('.first-section-left');
var fSectionRight = $('.first-section-right');


//smooth-scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top-200
     }, 500,'swing', function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
//smooth-scroll
//popup-box
var popupboxGrid = $('.fancybox');


   popupboxGrid.fancybox();

//popup-box

//mobile-handle
var mobileHandle = $('.mobile-handle-div');
var mobileMenu = $('.nav-menu');
var menuOptions = $('.menu-options');

mobileHandle.on('click', function(){
   mobileMenu.slideToggle();
});
menuOptions.on('click', function(){
   mobileMenu.slideToggle();
})
//mobile-handle
