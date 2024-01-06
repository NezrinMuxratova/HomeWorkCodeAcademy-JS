let form = document.querySelector("form");
let allInput = document.querySelectorAll("input");
let goBtn = document.querySelector(".goBack-btn");
let header = document.querySelector("header");
let nav = document.querySelector(".h-nav");
let menuIcon = document.querySelector(".fa-bars");
const BASE_URL_TWO = "http://localhost:2003/cards";
const id = new URLSearchParams(window.location.search).get("id");
menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});
async function formData() {
  let responsive = await axios(`${BASE_URL_TWO}/${id}`);
 
    (allInput[1].value = responsive.data.title),
    (allInput[2].value = responsive.data.description);
}
if (id) {
    formData()
}
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
form.addEventListener("submit", function(e){
    e.preventDefault();
    let newCard={
        img:`./assets/image/${allInput[0].value.split("\\")[2]}`,
        title:allInput[1].value,
       description:allInput[2].value,

    }
    if (!id) {
        if (
            allInput[0].value != "" &&
            allInput[1].value != "" &&
            allInput[2].value != ""
        ) {
            axios.post(`${BASE_URL_TWO}`, newCard)
        }else{
            window.alert("Please fill fields")
        }
    }else{
        axios.patch(`${BASE_URL_TWO}/${id}`, newCard)
    }
    window.location="../../index.html"
})

goBtn.addEventListener("click", function (e) {
    window.history.back();
  });