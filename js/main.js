jQuery.noConflict();

jQuery(document).ready(function ($) {
  // index
  if ($(".header__swiper-container").length > 0) {
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
  }

  $(document).ready(function () {
    $(".catalog__item-title").click(function (e) {
      e.preventDefault();
      $(this).next(".catalog__item-content").toggleClass("active");
      $(this).toggleClass("active");
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
    $(".product-bookmark__item-title").click(function (e) {
      e.preventDefault();
      $(this).next(".product-bookmark__item-content").toggleClass("active");
      $(this).toggleClass("active");
    });
    $(".accordion-title").click(function (e) {
      e.preventDefault();
      $(this).next(".accordion-content").toggleClass("active");
      $(this).toggleClass("active");
    });

    $(".services__link").click(function (e) {
      e.preventDefault();
      $(this).next().toggleClass("active");
      $(this).toggleClass("active");
    });

    $(".nav__burger").click(function () {
      $(".nav__block, .nav__burger, body").toggleClass("active");
    });
  });

  if ($("#download__swiper-container").length > 0) {
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
  }
  // index
  // about

  let heigthTabContent = $(".tab-content").height();
  $(".about__tabs").css({ height: heigthTabContent + 50 });
  $(".tabs").css({ height: heigthTabContent + 88 });

  let heigthStabContent = $(".stab-content").height();
  $(".solutions__tabs").css({ height: heigthStabContent });

  // about
  // services

  let heigthTabContentServices = $(".tab-content").height();
  $(".services__tabs").css({ height: heigthTabContentServices + 126 });

  // services
  // set

  const btns = document.querySelectorAll(".counter__btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector(".counter__value");
      const currentValue = +inp.value;
      let newValue;
      if (direction === "plus") {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }
      inp.value = newValue;
    });
  });

  // modal
  $(".data__checkbox").click(function () {
    $(".modal__data").toggleClass("active");
  });

  $(".set__btn-link.modal-mobil-btn").click(function (e) {
    e.preventDefault();
    $(".modal.modal-mobil, .modal__close-wind").addClass("active");
    $("body").addClass("lock");
  });
  $(".modal__close, .modal__close-wind, .modal__btn").click(function (e) {
    e.preventDefault();
    $(".modal, .modal__close-wind").removeClass("active");
    $("body").removeClass("lock");
  });
  $(".modal__btn").click(function () {
    $(".modal-thank.modal-thank-mobil, .modal__close-wind").addClass("active");
    $("body").addClass("lock");
  });

  if ($(".modal-thank").length > 0) {
    $(".modal-thank, .modal__close-wind, .modal__close-thank").click(
      function () {
        $(".modal-thank, .modal__close-wind").removeClass("active");
        $("body").removeClass("lock");
      }
    );
  }
  $(".set__btn-link.modal-mail-btn").click(function (e) {
    e.preventDefault();
    $(".modal.modal-mail, .modal__close-wind").addClass("active");
    $("body").addClass("lock");
  });
  $(".modal__close, .modal__close-wind, .modal__btn").click(function (e) {
    e.preventDefault();
    $(".modal, .modal__close-wind").removeClass("active");
    $("body").removeClass("lock");
  });
  $(".modal__btn").click(function () {
    $(".modal-thank.modal-thank-mail, .modal__close-wind").addClass("active");
    $("body").addClass("lock");
  });

  if ($(".modal-thank").length > 0) {
    $(".modal-thank, .modal__close-wind, .modal__close-thank").click(
      function () {
        $(".modal-thank, .modal__close-wind").removeClass("active");
        $("body").removeClass("lock");
      }
    );
  }

  // catalog

  // productCard

  // details

  if ($(".details-swiper-container").length > 0) {
    if ($(window).width() <= 769) {
      new Swiper(".details-swiper-container", {
        loop: true,
        direction: "vertical",
        effect: "fade",
        thumbs: {
          swiper: {
            el: ".details-mini-mobil-swiper-container",
            loop: true,
            spaceBetween: 10,
            direction: "horizontal",
            breakpoints: {
              577: { slidesPerView: 5 },
              320: { slidesPerView: 3 },
            },
          },
        },
        breakpoints: {
          768: {},
          320: {},
        },
      });
    } else {
      new Swiper(".details-swiper-container", {
        loop: true,
        direction: "vertical",
        effect: "fade",
        thumbs: {
          swiper: {
            el: ".details-mini-swiper-container",
            slidesPerView: 5,
            direction: "vertical",
            loop: true,
            navigation: {
              nextEl: ".details-mini-swiper-button-next",
              prevEl: ".details-mini-swiper-button-prev",
            },
            breakpoints: {
              768: {},
              320: {},
            },
          },
        },
        breakpoints: {
          768: {},
          320: {},
        },
      });
    }
  }

  //  CHECKBOX
  $.each($(".details__checkbox"), function (index, val) {
    if ($(this).find("input").prop("checked") == true) {
      $(this).addClass("active");
    }
  });
  $(document).on("click", ".details__checkbox", function (event) {
    if ($(this).hasClass("active")) {
      $(this).find("input").prop("checked", false);
    } else {
      $(this).find("input").prop("checked", true);
    }
    $(this).toggleClass("active");
    return false;
  });

  // details
  // product-description

  let heigthProductDescriptionTabs = $(
    ".product-description__tabs li .tab-content"
  ).height();
  $(".product-description__tabs").css({
    height: heigthProductDescriptionTabs + 100,
  });

  // selected-modifications
  $.each($(".selected-modifications__add-product"), function (index, val) {
    if ($(this).find("input").prop("checked") == true) {
      $(this).addClass("active");
    }
  });
  $(document).on(
    "click",
    ".selected-modifications__add-product",
    function (event) {
      if ($(this).hasClass("active")) {
        $(this).find("input").prop("checked", false);
      } else {
        $(this).find("input").prop("checked", true);
      }
      $(this).toggleClass("active");
      return false;
    }
  );

  if ($(window).width() <= 769) {
    $(document).ready(function () {
      $(".details__btn-form").text(function (index, text) {
        return text.replace(
          "Посмотреть выбранные модификации",
          "Отправить заявку на расчет"
        );
      });
    });
  }

  $(".selected-modifications__product-mobil-title").click(function () {
    $(this)
      .next(".selected-modifications__product-mobil-wrapper")
      .toggleClass("active");
    $(this).toggleClass("active");
  });

  $(".new-products__block").hover(function () {
    $(this).toggleClass("active");
  });

  $(".catalog__title-wrapper").click(function () {
    $(".catalog__title-wrapper").toggleClass("active");
  });

  $('<div class="catalog__bar-mobil"><p>Мощность 130</p></div>').insertAfter(
    ".catalog__filter .catalog__bar:nth-child(2)"
  );

  $(
    '<div class="catalog__bar-mobil"><p>Световой поток 53 820</p></div>'
  ).insertAfter(".catalog__filter .catalog__bar:nth-child(4)");
  $('<div class="catalog__bar-mobil"><p>Цена min 10 000</p></div>').insertAfter(
    ".catalog__filter .catalog__bar:nth-child(6)"
  );
  $(
    '<div class="catalog__bar-mobil"><p>Угол рассеивания 160</p></div>'
  ).insertAfter(".catalog__filter .catalog__bar:nth-child(8)");
});

if (document.getElementById("catalog__slider-power")) {
  const catalogSliderPower = document.getElementById("catalog__slider-power");

  noUiSlider.create(catalogSliderPower, {
    start: [80],
    connect: [true, false],
    range: {
      min: 44,
      max: 432,
    },
    pips: {
      mode: "values",
      values: [44, 432],
    },
    tooltips: true,
    format: {
      to: function (value) {
        return parseInt(value);
      },
      from: function (value) {
        return parseInt(value);
      },
    },
  });

  const catalogSliderLightOutput = document.getElementById(
    "catalog__slider-light-output"
  );

  noUiSlider.create(catalogSliderLightOutput, {
    start: [80],
    connect: [true, false],
    range: {
      min: 6110,
      max: 53820,
    },
    pips: {
      mode: "values",
      values: [6110, 53820],
    },
    tooltips: true,
    format: {
      to: function (value) {
        return parseInt(value);
      },
      from: function (value) {
        return parseInt(value);
      },
    },
  });

  const catalogSliderAngle = document.getElementById("catalog__slider-angle");

  noUiSlider.create(catalogSliderAngle, {
    start: [80],
    connect: [true, false],
    range: {
      min: 15,
      max: 160,
    },
    pips: {
      mode: "values",
      values: [15, 160],
    },
    tooltips: true,
    format: {
      to: function (value) {
        return parseInt(value);
      },
      from: function (value) {
        return parseInt(value);
      },
    },
  });

  const catalogSliderPrice = document.getElementById("catalog__slider-price");

  noUiSlider.create(catalogSliderPrice, {
    start: [80],
    connect: [true, false],
    range: {
      min: 2500,
      max: 10575,
    },
    pips: {
      mode: "values",
      values: [2500, 10575],
    },
    tooltips: true,
    format: {
      to: function (value) {
        return parseInt(value);
      },
      from: function (value) {
        return parseInt(value);
      },
    },
  });

  const resetButton = document.getElementById("reset");

  resetButton.onclick = (e) => {
    e.preventDefault();
    catalogSliderPower.noUiSlider.reset();
    catalogSliderLightOutput.noUiSlider.reset();
    catalogSliderAngle.noUiSlider.reset();
    catalogSliderPrice.noUiSlider.reset();
  };

  catalogSliderPower.noUiSlider.on("change", (values, handle) => {
    console.log(catalogSliderPower.noUiSlider.get());
  });
}
