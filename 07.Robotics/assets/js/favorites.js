let goBack=document.querySelector(".goBack-btn")

goBack.addEventListener("click", function(){
    window.history.back("./index.html")
})


const BASE_URL = "http://localhost:5000/robots";

let favCount = document.querySelector(".fav-count");
let favoriCards=document.querySelector(".favorise-cards")
let header = document.querySelector("header");


let favorites = getFavoritesFromLocaleStorages();
calculateFavCount(favorites.length);
drawRobots(favorites)


window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

function drawRobots(data) {
    favoriCards.innerHTML = "";
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
  

      //Favorites///////////////////////////////////////
  
      const favIconElement = document.createElement("i");
     favIconElement.className="fa-solid fa-heart"
  
 
  
     favIconElement.addEventListener("click", function () {
        favorites = favorites.filter((item) => item.id !== element.id);
        setProductToLocaleStorage(favorites);
        cardsDiv.remove();
        let favoriteProducts = getFavoritesFromLocaleStorages();
  
  
        setProductToLocaleStorage(favoriteProducts);
        calculateFavCount(favoriteProducts.length);
      });
  
      ///////////////////////////////////////////////////
      const readMore = document.createElement("a");
      readMore.href = `details.html?id=${element.id}`;
      readMore.innerText = "VIEW DETAILS";
  
      readMore.className = "details-btn";
  
      imgDiv.append(robotImage,favIconElement);
      cardsTextDiv.append(h5Text, pText, readMore);
      // iconDiv.append(editIcon, deleteIcon);
      cardsDiv.append(imgDiv, cardsTextDiv);
      favoriCards.append(cardsDiv);
    });
  }

  
  function setProductToLocaleStorage(products) {
    localStorage.setItem("favs", JSON.stringify(products));
  }
  
  function getFavoritesFromLocaleStorages() {
    return JSON.parse(localStorage.getItem("favs")) ?? [];
  }
  
  function calculateFavCount(count) {
    favCount.textContent = count;
  }