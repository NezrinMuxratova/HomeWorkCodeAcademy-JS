let menuIcon = document.querySelector(".fa-bars");
let menuIcon1 = document.querySelector("#fa-xmark");
let nav = document.querySelector("#nav");

// window.addEventListener("DOMContentLoaded", function() {
//     console.log("DOMContentLoaded event worked");

// })
// window.addEventListener("unload", function() {
//     console.log("unload event worked");

// })
// let header=document.querySelector("header")
// // window.addEventListener("scroll", function(){
// //     // console.log(window.scrollY);
// // window.scrollY > 0 ? header.classList.add("header-scroll"):
// // header.classList.remove("header-scroll")
// // })

// window.addEventListener("scroll", function(){
//     header.classList.toggle("header-scroll", window.scrollY > 0)
//       console.log(window.scrollY);
// })

// menuIcon.onclick=function(){
//     menu.classList.toggle("open")
//     let Isopen=menu.classList.contains("open")
//     Isopen ? menuIcon1.classList("fa-xmark") : menuIcon1.classList("fa-bars")
// }

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
});
this.classList.contains("fa-bars")
  ? (this.classList =( "fa-solid fa-xmark"))
  : (this.classList = ("fa-solid fa-bars"));
