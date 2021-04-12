// details
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
