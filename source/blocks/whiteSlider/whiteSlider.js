/* eslint-disable */
const whiteSlider = new Swiper('.whiteSlider__slider', {
  spaceBetween: 60,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.whiteSlider__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.whiteSlider__button-next',
    prevEl: '.whiteSlider__button--prev',
  }
});
/* eslint-enable */
