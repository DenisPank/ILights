// index

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
  autoplay: {
    delay: 1500,
  },
});

$(document).ready(function () {
  $(".catalog__item-title").click(function (e) {
    e.preventDefault();
    $(this).next(".catalog__item-content").toggleClass("active");
  });

  $(".solutions__item-title").click(function (e) {
    e.preventDefault();
    $(this).next(".solutions__item-content").toggleClass("active");
    $(this).toggleClass("active");
  });
  $(".about__item-title").click(function (e) {
    e.preventDefault();
    $(this).next(".about__item-content").toggleClass("active");
    $(this).toggleClass("active");
  });
  $(".services__item-title").click(function (e) {
    e.preventDefault();
    $(this).next(".services__item-content").toggleClass("active");
    $(this).toggleClass("active");
  });

  $(".services__link").click(function (e) {
    e.preventDefault();
    $(this).next().toggleClass("active");
    $(this).toggleClass("active");
  });

  $(".new-products__block").hover(function () {
    $(this).toggleClass("active");
  });

  $(".nav__burger").click(function () {
    $(".nav__block, .nav__burger, body").toggleClass("active");
  });
});

const slider = document.querySelector(".download__swiper-container");

var swiper;

function resizeScrenn() {
  if ($(window).width() >= 769) {
    if ($("#download__swiper-container").length > 0) {
      swiper = new Swiper(".download__swiper-container", {
        scrollbar: {
          el: ".download__swiper-scrollbar",
        },
        direction: "vertical",
        slidesPerView: 3,
      });
    }
  } else {
    if (slider.classList.contains("swiper-container-initialized")) {
      swiper.destroy();
    }
  }
}

resizeScrenn();

$(window).resize(function () {
  resizeScrenn();
});

// index
// about

let heigthTabContent = $(".tab-content").height();
$(".about__tabs").css({ height: heigthTabContent + 50 });

let heigthStabContent = $(".stab-content").height();
$(".solutions__tabs").css({ height: heigthStabContent });

// about
// services

let heigthTabContentServices = $(".tab-content").height();
$(".services__tabs").css({ height: heigthTabContentServices + 126 });

// services

// details
new Swiper(".details-swiper-container", {
  loop: true,
  direction: "vertical",
  thumbs: {
    swiper: {
      el: ".details-mini-swiper-container",
      direction: "vertical",
      slidesPerView: 5,
      loop: true,
      navigation: {
        nextEl: ".details-mini-swiper-button-next",
        prevEl: ".details-mini-swiper-button-prev",
      },
    },
  },
});

$(".details__character-number, .details__character-type").click(function (e) {
  e.preventDefault();
});

// details
