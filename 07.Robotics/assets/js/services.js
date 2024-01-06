const BASE_URL_TWO = "http://localhost:2003/cards";
let featuresCards = document.querySelector(".features-cards");
let menuIcon = document.querySelector(".fa-bars");
let nav = document.querySelector(".h-nav");

let header = document.querySelector("header");
async function getDataTwo() {
  let response = await axios(`${BASE_URL_TWO}`);
  console.log(response.data);
  featuresData(response.data);
}
getDataTwo();

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

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


async function deleteBtn(id,btn){
  if (confirm("Do you want to delete?")) {
    btn.closest("f-card")
    await axios.delete(`${BASE_URL_TWO}/${id}`)
  }
}
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});