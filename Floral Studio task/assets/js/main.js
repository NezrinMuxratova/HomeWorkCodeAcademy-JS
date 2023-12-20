$(".owl-carousel").owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const BASE_URL = " http://localhost:2000/products";
let flowersCard = document.querySelector(".flowers-pricing-cards");
let loadMoreBtn = document.querySelector(".load");
let search = document.querySelector(".search");
let sort = document.querySelector(".sort");
let menuIcon = document.querySelector("#menu");
let nav = document.querySelector(".h-nav");
let loadCard = [];
let limit = 3;
let products = null;
let productsCopy = null;

async function getData() {
  let response = await axios(`${BASE_URL}`);
  products = response.data;
  productsCopy = structuredClone(products);
  console.log(response.data);
  loadCard = response.data;
  drawFlowers(response.data);
  drawFlowers(response.data.slice(0, limit));
}
getData();
function drawFlowers(data) {
  flowersCard.innerHTML = "";
  data.forEach((element) => {
    const pricingCardDiv = document.createElement("div");
    pricingCardDiv.className = "pricing-card";
    const pricingImageDiv = document.createElement("div");
    pricingImageDiv.className = "pricing-image";
    const pricingImage = document.createElement("img");
    pricingImage.src = element.images;
    const pricingName = document.createElement("p");
    pricingName.textContent = element.name;
    const pricingPrice = document.createElement("p");
    pricingPrice.textContent = `${element.price}`;
    const readMore = document.createElement("a");
    readMore.href = `details.html?id=${element.id}`;
    readMore.innerText = "Read More";
    
    pricingImageDiv.append(pricingImage);
    pricingCardDiv.append(pricingImageDiv, readMore, pricingName, pricingPrice);
    flowersCard.append(pricingCardDiv);
  });
}

loadMoreBtn.addEventListener("click", function () {
  limit += 3;
  if (limit >= loadCard.length) {
    this.remove();
  }
  drawFlowers(loadCard.slice(0, limit));
});

search.addEventListener("input", function (element) {
  let filtered = products.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(element.target.value.toLocaleLowerCase());
  });
  drawFlowers(filtered);
  console.log(filtered);
});

sort.addEventListener("click", function () {
  let sorted;
  if (this.innerText == "Ascending") {
    sorted = products.sort((a, b) => a.name.localeCompare(b.name));
    this.innerText = "Descending";
  } else if (this.innerText == "Descending") {
    sorted = products.sort((a, b) => b.name.localeCompare(a.name));
    this.innerText = "Default";
  } else {
    this.innerText = "Ascending";
    sorted = productsCopy;
  }
  drawFlowers(sorted);
});

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});
