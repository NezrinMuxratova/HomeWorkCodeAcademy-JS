const BASE_URL = `http://localhost:8000/products`;
let productsCard = document.querySelector(".products-card");

async function getData() {
  let response = await axios(`${BASE_URL}`);
  console.log(response.data);
  drawCards(response.data);
}
getData();

function drawCards(data) {
  productsCard.innerHTML = "";
  data.forEach((element) => {
    const productDivImage = document.createElement("div");
    productDivImage.className = "products-image-1";

    const productImage = document.createElement("img");
    productImage.src = element.image;

    const productTitlePriceDiv = document.createElement("div");
    productTitlePriceDiv.className = "products-price";

    const productTitle = document.createElement("h5");
    productTitle.textContent = element.title;

    const productPrice = document.createElement("p");
    productPrice.textContent = element.price;

    productTitlePriceDiv.append(productTitle, productPrice);
    productDivImage.append(productImage, productTitlePriceDiv);
    productsCard.append(productDivImage);
  });
}
