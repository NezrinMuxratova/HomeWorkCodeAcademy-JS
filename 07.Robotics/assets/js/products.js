const BASE_URL = "http://localhost:5000/robots";

let robotsCard = document.querySelector(".robotics-bottom");

let header = document.querySelector("header");
let menuIcon = document.querySelector(".fa-bars");

let nav = document.querySelector(".h-nav");

let searchInput = document.querySelector(".search");

let favCount = document.querySelector(".fav-count");

let sortBtn = document.querySelector(".sort");


let products = null;
let productsCopy = null;
let loadCard = [];

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
//favorites
let favorites = getFavoritesFromLocaleStorages();
calculateFavCount(favorites.length);
/////////////////////////////////////////

async function getData() {
  let response = await axios(`${BASE_URL}`);
  // console.log(response.data);
  // drawRobots(response.data)
  loadCard = response.data;
  products = response.data;
  productsCopy = structuredClone(products);
  drawRobots(response.data)
}
getData();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function drawRobots(data) {
  robotsCard.innerHTML = "";
  data.forEach((element) => {
    const cardsDiv = document.createElement("div");
    cardsDiv.className = "cards";

    const imgDiv = document.createElement("div");
    imgDiv.className = "image";

    const robotImage = document.createElement("img");
    robotImage.src = element.image;

    const cardsTextDiv = document.createElement("div");
    cardsTextDiv.className = "cards-text";

    const h5Text = document.createElement("h5");
    h5Text.textContent = element.title;

    const pText = document.createElement("p");
    pText.textContent = element.information;

    // const iconDiv = document.createElement("div");
    // iconDiv.className = "icons";

    // const editIcon = document.createElement("i");
    // editIcon.className = "fa-solid fa-pen-to-square fa-beat";

    // const deleteIcon = document.createElement("i");
    // deleteIcon.className = "fa-solid fa-trash fa-beat";

    // deleteIcon.addEventListener("click", async function (id, btn) {
    //   if (confirm("Do you want to delete")) {
    //     cardsDiv.remove();
    //   }
    // });
    //Favorites///////////////////////////////////////

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

    ///////////////////////////////////////////////////
    const readMore = document.createElement("a");
    readMore.href = `details.html?id=${element.id}`;
    readMore.innerText = "VIEW DETAILS";

    readMore.className = "details-btn";

    imgDiv.append(robotImage, favIconElement);
    cardsTextDiv.append(h5Text, pText, readMore);
    // iconDiv.append(editIcon, deleteIcon);
    cardsDiv.append(imgDiv, cardsTextDiv, );
    robotsCard.append(cardsDiv);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function setProductToLocaleStorage(products) {
  localStorage.setItem("favs", JSON.stringify(products));
}

function getFavoritesFromLocaleStorages() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}

function calculateFavCount(count) {
  favCount.textContent = count;
}



//search

searchInput.addEventListener("input", function (element) {
  let filtered = products.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(element.target.value.toLocaleLowerCase());
  });
  drawRobots(filtered);
});

//sort
sortBtn.addEventListener("click", function () {
  let sorted;
  if (this.innerText === "Ascending") {
    sorted = products.sort((a, b) => a.title.localeCompare(b.title));
    this.innerText = "Descending";
  } else if (this.innerText === "Descending") {
    sorted = products.sort((a, b) => b.title.localeCompare(a.title));
    this.innerText = "Default";
  } else {
    this.innerText = "Ascending";
    sorted = productsCopy;
  }
  drawRobots(sorted);
});
