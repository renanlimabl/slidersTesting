// $('#slick0').slick({
//     rows: 2,
//     dots: false,
//     infinite: true,
//     cssEase: 'linear',
//     speed: 300,
//     variableWidth: true,
//     adaptiveHeight: true,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     nextArrow: $('.arrow-right-0'),
//     prevArrow: $('.arrow-left-0')
// });
const allSliders = document.querySelectorAll('.slick-wrapper')
console.log(allSliders)

allSliders.forEach((item, index) => {
    $(`#newslide${index}`).slick({
        rows: 2,
        dots: false,
        infinite: true,
        cssEase: 'linear',
        speed: 300,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: $(`.arrow-right-${index}`),
        prevArrow: $(`.arrow-left-${index}`),
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,               
                arrows: false,
                nextArrow: '',
                prevArrow: ''
              }
            },
          ]
    })
})