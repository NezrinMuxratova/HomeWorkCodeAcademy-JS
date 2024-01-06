let childrenCards = document.querySelector(".children-cards");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".button-89");
let loadMoreBtn = document.querySelector(".load-more-btn");
let barsIcon=document.querySelector("#fa-bars")
let nav =document.querySelector(".h-nav")
const BASE_URL = "http://localhost:5000/children";

let products = null;
let productsCopy = null;
let loadCard=[];
let limit=3;
async function getData() {
  let response = await axios(`${BASE_URL}`);
  products = response.data;
  loadCard=response.data;
  productsCopy = structuredClone(products);
  console.log(response.data);
//   drawCards(response.data);
  drawCards(response.data.slice(0,limit))
}

getData();

function drawCards(data) {
  childrenCards.innerHTML = "";
  data.forEach((element) => {
    childrenCards.innerHTML += `
        <div class="card">
        <div class="image">
          <img src="${element.images}" alt="" />
        </div>
        <div class="cards-text">
          <p>${element.name},</p>
          <p class="years">${element.years} yrs. old</p>
        </div>
      </div>
        
        `;
  });
}

//SEARCH INPUT
searchInput.addEventListener("input", function (element) {
  let filtered = products.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(element.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
});

//SORT
sortBtn.addEventListener("click", function () {
  let sorted;
  if (this.innerText === "Ascending") {
    sorted = products.sort((a, b) => a.name.localeCompare(b.name));
    this.innerText = "Descending";
  } else if (this.innerText === "Descending") {
    sorted = products.sort((a, b) => b.name.localeCompare(a.name));
    this.innerText = "Default";
  } else {
    this.innerText = "Ascending";
    sorted = productsCopy;
  }
  drawCards(sorted);
});

loadMoreBtn.addEventListener("click", function(){
    limit +=3;
    if (limit>=loadCard.length) {
        this.remove()
    }
    drawCards(loadCard.slice(0,limit))
})

barsIcon.addEventListener("click", function(){
  nav.classList.toggle("show")
  // this.classList.contains("fa-bars")
  // ? (this.classList = "fa-solid fa-xmark")
  // : (this.classList = "fa-solid fa-bars");
})