
let bagCards=document.querySelector(".bagCards")
let search=document.querySelector(".search")
const BASE_URL="http://localhost:8080/products"

async function getData(){
    let response =await axios (`${BASE_URL}`)
    console.log(response.data);
    drawCards(response.data)
}
getData()

function drawCards(arr){

      arr.forEach(element => {
        
          bagCards.innerHTML += `
          
          <div class="card" style="width: 18rem;">
          <img src="${element.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.brandName}</h5>
            <p class="card-text">${element.price}</p>
            <p class="card-text">${element.color}</p>
            <p class="card-text">${element.type}</p>
            <p class="card-text">${element.measure}</p>
            <a href="#" class="btn btn-primary">Basket</a>
          </div>
        </div>
  
          `
      });
    ;
}