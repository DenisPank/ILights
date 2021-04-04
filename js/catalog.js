const filters = document.querySelector("#filters");

filters.addEventListener("input", filterGoods);

function filterGoods() {
  const country = filters.querySelector("#country").value,
    sizes = [...filters.querySelectorAll("#size input:checked")].map(
      (n) => n.value
    ),
    priceMin = document.querySelector("#price-min").value,
    priceMax = document.querySelector("#price-max").value;

  outputGoods(
    DATA.filter(
      (n) =>
        (!country || n.country === country) &&
        (!sizes.length || sizes.includes(n.size)) &&
        (!priceMin || priceMin <= n.cost) &&
        (!priceMax || priceMax >= n.cost)
    )
  );
}

function outputGoods(goods) {
  document.getElementById("goods").innerHTML = goods
    .map(
      (n) => `
    <div class="single-goods">
      <h3>${n.name}</h3>
      <img src="${n.image}">
      <p>Цена: ${n.cost}</p>
      <button class="add-to-cart" data-art="${n.name}">Купить</button>
    </div>
  `
    )
    .join("");
}

const DATA = [
  {
    sex: "male",
    name: "Рубашка №1",
    cost: 1000,
    country: "france",
    image:
      "http://i.piccy.info/i9/9921ed03bf45751d45447b15e78be751/1566814909/19890/1334636/1.jpg",
    size: "S",
  },
  {
    sex: "male",
    name: "Рубашка №2",
    cost: 1200,
    country: "turkey",
    image:
      "http://i.piccy.info/i9/acc4df9b14e48a42d7cd353e923673e7/1566814962/22015/1334636/2.jpg",
    size: "M",
  },
  {
    sex: "male",
    name: "Рубашка №3",
    cost: 1700,
    country: "china",
    image:
      "http://i.piccy.info/i9/174610be67bfea39f99c956885ae3786/1566815027/25896/1334636/3.jpg",
    size: "L",
  },
  {
    sex: "male",
    name: "Рубашка №4",
    cost: 2000,
    country: "turkey",
    image:
      "http://i.piccy.info/i9/e2e5c6cb274121b9898b7d45a085130f/1566815049/29582/1334636/4.jpg",
    size: "XL",
  },
];

outputGoods(DATA);
