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

$(".catalog__item-title").click(function (e) {
  e.preventDefault();
  $(".catalog__item .catalog__item-content").toggleClass(
    "catalog__item-content-active"
  );
});
