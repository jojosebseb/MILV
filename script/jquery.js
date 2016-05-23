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
  });
});
//slick
//initvars
var win = $(window);
//initvars

//first section
var fSectionLeft = $('.first-section-left');
var fSectionRight = $('.first-section-right');

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
