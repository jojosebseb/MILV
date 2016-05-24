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
