let childrenCards = document.querySelector(".children-cards");
let searchInput = document.querySelector(".search");

let barsIcon=document.querySelector("#fa-bars")
let nav =document.querySelector(".h-nav")
const BASE_URL = "http://localhost:5000/children";


let products = null;
let productsCopy = null;
async function getData() {
    let response = await axios(`${BASE_URL}`);
    products = response.data;
    loadCard=response.data;
    productsCopy = structuredClone(products);
    console.log(response.data);
    drawCards(response.data);
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
  

  barsIcon.addEventListener("click", function(){
    nav.classList.toggle("show")
  
  })