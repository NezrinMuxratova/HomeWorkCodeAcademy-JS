const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Track your steps, heart rate, and more with this fitness tracker.",
    price: 49.99,
  },
  {
    id: 7,
    title: "Digital Camera",
    description: "High-resolution digital camera with various lenses.",
    price: 799.99,
  },
  {
    id: 8,
    title: "Wireless Keyboard and Mouse",
    description: "Ergonomic keyboard and mouse combo for your workstation.",
    price: 39.99,
  },
  {
    id: 9,
    title: "Microwave Oven",
    description: "Compact microwave oven for quick and easy cooking.",
    price: 69.99,
  },
  {
    id: 10,
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with rich, clear sound.",
    price: 49.99,
  },
  {
    id: 11,
    title: "Coffee Table",
    description: "Modern coffee table with storage and a glass top.",
    price: 149.99,
  },
];

let homePage = document.querySelector(".homePage");

function drawHomePage(data) {
  homePage.innerHTML = "";
  data.forEach((element) => {
    let divElem = document.createElement("div");

    divElem.className =
      "col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center";
    divElem.innerHTML = `
        <div class="card border-danger mb-3" style="max-width: 18rem;">
        <div class="title d-flex justify-content-between text-center p-2">

            <h4> ${element.title}  </h4>
            <i class="fa-regular fa-heart text-danger cursor:pointer " onclick=addToFavorite("${
              element.id
            }") ></i>
        </div>
         <div class="card-body ">
           <h6 class="card-title">${element.price}</h6>
           <p class="card-text">${element.description.slice(0.1)}...</p>
         </div>
       </div>
        `;
    homePage.append(divElem);
  });
}
drawHomePage(products);
let wishlist = getProductsToLocalSotarge() ?? [];

function addToFavorite(id) {
  let favorites = products.find((item) => item.id);
  let index = wishlist.findIndex((item) => item.favorites);
  if (index > -1) {
    wishlist[index].count + 1;
    console.log(wishlist[index]);
  } else {
    wishlist.push({ count: 1, favorites: favorites });
  }

  setProductsToLocalSotarge(wishlist);
}

function setProductsToLocalSotarge(arr) {
  localStorage.setItem("allProducts", JSON.stringify(arr));
}
function getProductsToLocalSotarge() {
  return JSON.parse(localStorage.getItem("allProducts"));
}
