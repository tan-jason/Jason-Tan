$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    if($(this).scrollTop() > 720) { 
        $('.navbar').addClass('solid');
        $('.fixed-btn').addClass('show');
    } else {
        $('.navbar').removeClass('solid');
        $('.fixed-btn').removeClass('show');
    }
  });
  $(window).load(function() {
    $('.slideshow slideshow2').cycle({
      fx: 'fadeZoom',
      timeout: 2000,
      before: onBefore
    });
  });
});

const collapseBtn = document.querySelector('#collapse-btn');
collapseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (document.querySelector('.navbar').classList.contains('uncollapsed')){
    document.querySelector('.navbar').classList.remove('uncollapsed');
  } else {
    document.querySelector('.navbar').classList.add('uncollapsed');
  }

  if($(window).width < 991){
    console.log("hi")
    document.querySelector('.navbar').classList.add('expanded');
  }
});



$(window).resize(function() {
  if ($(this).width() > 991) {
    if(document.querySelector('.navbar').classList.contains('expanded')){
      document.querySelector('.navbar').classList.remove('expanded');
    }
  }
});

$(window).resize(function() {
  if ($(this).width() < 991) {
    if(!document.querySelector('.navbar').classList.contains('expanded')){
      document.querySelector('.navbar').classList.add('expanded');
    }
  }
});

$('.navbar a').on('click',function(e){
  if(this.hash != ''){
    e.preventDefault();

    const hash = this.hash;

    $('html,body').animate({
      scrollTop: $(hash).offset().top
    }, 75);
  }
})

$(function(){
  setInterval(function(){
     $(".slideshow1 ul").animate({marginLeft:-350},800,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
     })
  }, 3500);
});

// controls the animation with mouse over
$(function(){
 var timeSlide;
 function goSlide() {
     $(".slideshow2 ul").animate({marginLeft:-525},800,function(){
       $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
     })
 }
 timeSlide = setInterval(goSlide, 3000);
 
 $('.slideshow2').on('mouseenter', function(){
   // stop animation
   clearInterval(timeSlide);
 }).on('mouseleave', function(){
   // play animation
   timeSlide = setInterval(goSlide, 3500);
 });
});