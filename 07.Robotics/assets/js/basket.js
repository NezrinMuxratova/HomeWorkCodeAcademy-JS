const BASE_URL = "http://localhost:5000/robots";
let tBody = document.querySelector("tbody");
let header = document.querySelector("header");
let goBack=document.querySelector(".goBack-btn")

let basketCount = document.querySelector(".basket-count");

let basket = getProductsToLocalSotarge() ?? [];

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });


  // async function getData() {
  //   let response = await axios(`${BASE_URL}`);
  //  drawBasket(response.data)
  // }
  // getData();




  function drawBasket(element) {
    tBody.innerHTML = "";
    

    
  
   
      let tr = document.createElement("tr");
  
      tr.innerHTML += `
      <td><img src="${element.image}" /></td>
      <td>${element.title}</td>
      <td>${element.price} AZN</td>
  
      <td class="sub-total">${element.count * element.price} AZN</td>
      <td><button onclick=incrementCount(this,"${
        element.id
      }")>+</button><span>${
        element.count
      }</span><button onclick=decrementCount(this,"${
        element.id
      }")>-</button></td>
      <td><button class="btn btn-danger" onclick=deleteProduct(this,"${
        element.id
      }")>Delete</button></td>
    `;
  
      tBody.append(tr);



  
  ;

  setProductsToLocalSotargeTwo(basket);
  getBasketCount()
}

drawBasket(basket)



function getBasketCount(){
    basketCount.textContent=basket.reduce((acc,curr)=> acc+curr.count,0)
  }
  getBasketCount()
  
  function setProductsToLocalSotargeTwo (arr){
    localStorage.setItem("allProducts", JSON.stringify(arr))
  
  }
  function getProductsToLocalSotarge(){
    return JSON.parse(localStorage.getItem("allProducts")) 
  }
  


  goBack.addEventListener("click", function(){
    window.history.back("./index.html")
})