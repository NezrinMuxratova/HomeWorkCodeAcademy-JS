window.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event worked");
    
})
window.addEventListener("unload", function() {
    console.log("unload event worked");
    
})
let header=document.querySelector("header")
// window.addEventListener("scroll", function(){
//     // console.log(window.scrollY);
// window.scrollY > 0 ? header.classList.add("header-scroll"):
// header.classList.remove("header-scroll")
// })

window.addEventListener("scroll", function(){
    header.classList.toggle("header-scroll", window.scrollY > 0)
      console.log(window.scrollY);
})
