let menuIcon = document.querySelector(".fa-bars");
let nav = document.querySelector(".h-nav");

menuIcon.addEventListener("click", function () {
    nav.classList.toggle("show");
    this.classList.contains("fa-bars")
      ? (this.classList = "fa-solid fa-xmark")
      : (this.classList = "fa-solid fa-bars");
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
  