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
});
