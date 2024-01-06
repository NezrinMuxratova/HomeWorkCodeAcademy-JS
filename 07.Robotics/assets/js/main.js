const BASE_URL = "http://localhost:5000/robots";

let robotsCard = document.querySelector(".robotics-bottom");
let nav = document.querySelector(".h-nav");
let menuIcon = document.querySelector(".fa-bars");
let loadMore = document.querySelector(".more");
let basketCount = document.querySelector(".basket-count");
let searchInput = document.querySelector(".search");

let favCount = document.querySelector(".fav-count");
let header = document.querySelector("header");
let sortBtn = document.querySelector(".sort");

let limit = 3;
let products = null;
let productsCopy = null;
let loadCard = [];

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

//basket


let basket=getProductsToLocalSotarge() ?? []

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
  drawRobots(response.data.slice(0, limit));
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

    //basket
    const basketIcon = document.createElement("i");
    basketIcon.className = "fa-solid fa-cart-shopping";
    
    basketIcon.addEventListener("click", function () {
      
      const basketPush=products.find((item)=>item.id===element.id)
      basket.push(basketPush)
  

      const basketIndex = products.findIndex(
        (item) => item.id === element.id
      );
        //  console.log(basketIndex);
         
        if (basketIndex > -1) {
          basket.find((item)=>{
            return   item.count = item.count + 1;
            
          })
        } else {
          basket.push({ count: 1, basketIndex: basketIndex });
        }
        console.log(basket);
   
      setProductsToLocalSotargeTwo(basket);
      getBasketCount(basket.length)
    
    });

    /////////////////////////////////////////////////

    const readMore = document.createElement("a");
    readMore.href = `details.html?id=${element.id}`;
    readMore.innerText = "VIEW DETAILS";

    readMore.className = "details-btn";

    imgDiv.append(robotImage, favIconElement);
    cardsTextDiv.append(h5Text, pText, readMore);
    // iconDiv.append(editIcon, deleteIcon);
    cardsDiv.append(imgDiv, cardsTextDiv, basketIcon);
    robotsCard.append(cardsDiv);
  });
}


function getBasketCount(){
let basketCount = document.querySelector(".basket-count");
  
  basketCount.textContent=basket.reduce((acc,curr)=> acc+curr.count,0)
}
getBasketCount()

function setProductsToLocalSotargeTwo (arr){
  localStorage.setItem("allProducts", JSON.stringify(arr))

}
function getProductsToLocalSotarge(){
  return JSON.parse(localStorage.getItem("allProducts")) 
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
//loadmore
loadMore.addEventListener("click", function () {
  limit += 3;
  if (limit >= loadCard.length) {
    this.remove();
  }
  drawRobots(loadCard.slice(0, limit));
});

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

////////////////////////////////////////////////////////////////

const BASE_URL_TWO = "http://localhost:2003/cards";
let featuresCards = document.querySelector(".features-cards");

async function getDataTwo() {
  let response = await axios(`${BASE_URL_TWO}`);
  console.log(response.data);
  featuresData(response.data);
}
getDataTwo();

function featuresData(data) {
  featuresCards.innerHTML = "";
  data.forEach((element) => {
    featuresCards.innerHTML += `
 
 <div class="f-card">
 <div class="image">
   <a href="">
     <img
       src="${element.img}"
       alt=""
     />
     ${element.title}</a
   >
 </div>
 <p>
   ${element.description}
 </p>
 <i class="fa-solid fa-trash fa-beat" onclick=deleteBtn(${element.id},this)></i>
 
 <a href="../../form.html?id=${element.id}"><i class="fa-solid fa-pen-to-square fa-beat" ></i></a>

 </div>

 
 
 `;
  });
}

async function deleteBtn(id, btn) {
  if (confirm("Do you want to delete?")) {
    btn.closest("f-card");
    await axios.delete(`${BASE_URL_TWO}/${id}`);
  }
}
