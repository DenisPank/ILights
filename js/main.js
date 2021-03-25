new Swiper(".header__swiper-container", {
  navigation: {
    nextEl: ".header__swiper-button-next",
    prevEl: ".header__swiper-button-prev",
  },
  scrollbar: {
    el: ".header__swiper-scrollbar",
  },
  slidesPerView: 1,
  centeredSlides: false,
});
