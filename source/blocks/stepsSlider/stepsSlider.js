/* eslint-disable */
const whiteSlider = new Swiper('.stepsSlider__slider', {
  spaceBetween: 20,
  slidesPerView: 7,
  centeredSlides: true,
  autoHeight: true,
  pagination: {
    el: '.stepsSlider__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.stepsSlider__button-next',
    prevEl: '.stepsSlider__button--prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 7,
    },
    960: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
});
/* eslint-enable */
