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

$(".new-products__block").hover(function () {
  $(this).toggleClass("active");
});

$(".nav__burger").click(function () {
  $(".nav__block, .nav__burger, body").toggleClass("active");
});

$(".catalog__title-wrapper").click(function () {
  $(".catalog__title-wrapper").toggleClass("active");
});

catalogSliderPower.noUiSlider.on("change", (values, handle) => {
  console.log(catalogSliderPower.noUiSlider.get());
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
