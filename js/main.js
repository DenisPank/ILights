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

$(document).ready(function () {
  $(".catalog__item-title").click(function (e) {
    e.preventDefault();
    $(this).next(".catalog__item-content").toggleClass("active");
  });
  $(".services__link").click(function (e) {
    e.preventDefault();
    $(this).next().toggleClass("active");
    $(this).toggleClass("active");
  });
  $(".new-products__block").hover(function () {
    $(this).toggleClass("active");
  });
});
