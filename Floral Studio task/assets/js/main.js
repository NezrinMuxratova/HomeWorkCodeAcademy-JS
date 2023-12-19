
$(".owl-carousel").owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});


const BASE_URL=" http://localhost:2000/products"
let flowersCard=document.querySelector(".flowers-pricing-cards")
let loadMoreBtn=document.querySelector(".load")
let loadCard = [];
let limit = 3;

async function getData(){
  let response = await axios(`${BASE_URL}`)
  console.log(response.data);
  loadCard = response.data;
  drawFlowers(response.data)
  drawFlowers(response.data.slice(0,limit))
}
getData()
function drawFlowers(data){
  flowersCard.innerHTML=""
  data.forEach(element => {
  const pricingCardDiv=document.createElement("div")
  pricingCardDiv.className="pricing-card"
  const pricingImageDiv=document.createElement("div")
   pricingImageDiv.className="pricing-image"
  const pricingImage=document.createElement("img")
pricingImage.src=element.images
  const pricingName=document.createElement("p")
pricingName.textContent=element.name
  const pricingPrice=document.createElement("p")
pricingPrice.textContent=element.price

pricingImageDiv.append(pricingImage)
pricingCardDiv.append(pricingImageDiv,pricingName,pricingPrice)
flowersCard.append(pricingCardDiv)
  });
}

loadMoreBtn.addEventListener("click", function(){
  limit+=3
  if (limit >= loadCard.length) {
    this.remove()
  }
drawFlowers(loadCard.slice(0,limit))
})
