let homePage = document.querySelector(".homePage");
let wishlist = getProductsToLocalSotarge() ?? [];

function drawHomePage(data) {
  homePage.innerHTML = "";
  data.forEach((element) => {
    let divElem = document.createElement("div");

    divElem.className =
      "col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center";
    divElem.innerHTML = `
        <div class="card border-danger mb-3" style="max-width: 18rem;">
        <div class="title d-flex justify-content-between text-center p-2">

            <h4> ${element.favorites.title}</h4>
            <i class="fa-solid fa-heart text-danger" onclick=addToRemove(${element.favorites.id},this) ></i>
        </div>
         <div class="card-body ">
           <h6 class="card-title">${element.favorites.price}</h6>
           <p class="card-text">${element.favorites.description}</p>
         </div>
       </div>
        `;
    homePage.append(divElem);
  });
}
drawHomePage(wishlist);

function setProductsToLocalSotarge(arr) {
  localStorage.setItem("homePage", JSON.stringify(arr));
}
function getProductsToLocalSotarge() {
  return JSON.parse(localStorage.getItem("homePage"));
}

function addToRemove(id, i) {
  wishlist = wishlist.filter((item) => item.id !== id);
  setProductsToLocalSotarge(wishlist);
  i.parentElement.parentElement.remove();
  console.log(i);
}
