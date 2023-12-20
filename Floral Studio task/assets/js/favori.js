
const BASE_URL = " http://localhost:2000/products";
let flowersCard = document.querySelector(".flowers-pricing-cards");

let favCount = document.querySelector(".fav-count");
let favorites = getFavoritesFromLocaleStorages();
calculateFavCount(favorites.length);


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
  
      // FAVORITES
      const favIconElement = document.createElement("i");
  
      const bool = favorites.find((item) => item.id === element.id);
  
      favIconElement.className = !bool
        ? "fa-regular fa-heart"
        : "fa-solid fa-heart";
  
      favIconElement.addEventListener("click", function () {
        this.className === "fa-regular fa-heart"
          ? (this.className = "fa-solid fa-heart")
          : (this.className = "fa-regular fa-heart");
          let favoriteProducts = getFavoritesFromLocaleStorages();
  
        const favIndex = favoriteProducts.findIndex(
          (item) => item.id === element.id
        );
  
        if (favIndex === -1) {
          favoriteProducts.push(element);
        } else {
          favoriteProducts.splice(favIndex, 1);
        }
  
        setProductToLocaleStorage(favoriteProducts);
        calculateFavCount(favoriteProducts.length);
      });
  
      pricingImageDiv.append(pricingImage, favIconElement);
      pricingCardDiv.append(pricingImageDiv, readMore, pricingName, pricingPrice);
      flowersCard.append(pricingCardDiv);
    });
  }


  function setProductToLocaleStorage(products) {
    localStorage.setItem("favs", JSON.stringify(products));
  }
  
  function getFavoritesFromLocaleStorages() {
    return JSON.parse(localStorage.getItem("favs")) ?? [];
  }