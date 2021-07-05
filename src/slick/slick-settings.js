$(document).ready(function(){
  $('.slider').slick({
      dots: false,
      infinite: true,
      pauseOnHover: true,
  });
});
 $('.slider-for').slick({
  slidesToShow: 1,
     slidesToScroll: 1,
            autoplay: true,
      autoplaySpeed: 7000,
    asNavFor: '.slider-nav',
    //  adaptiveHeight: true,
     fade: false,
     arrows: true,
              initialSlide: 5,
     appendArrows: $('.review-slide'),
               responsive: [
        {
            breakpoint: 0,
            settings: {
                autoplay: false,
             }
        },{
            breakpoint: 768,
            settings: {
                appendArrows: $('.nav-review'),
                autoplay: false,
             }
                   },
                    {
            breakpoint: 1681,
            settings: {
                autoplay: false,
             }
        }
    ]
});
$('.slider-nav').slick({
  slidesToShow: 7,
    slidesToScroll: 1,
              autoplay: true,
      autoplaySpeed: 30,
           initialSlide: 5,
    asNavFor: '.slider-for',
    variableWidth: true,
    centerMode: false,
    focusOnSelect: true,

    swipeToSlide: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                autoplay: false,
             }
        },
                {
            breakpoint: 480,
            settings: {
                slidesToShow: 5,
                centerMode: true,
                autoplay: false,
             }
        },
                                {
            breakpoint: 591,
                                    settings: {
                                        slidesToShow: 6,
                                        centerMode: true,
                                        autoplay: false,
                                    }
                                    },
                                     {
            breakpoint: 1681,
            settings: {
                autoplay: false,
             }
        }
    ]
});