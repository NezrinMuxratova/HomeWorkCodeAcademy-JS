let id = new URLSearchParams(window.location.search).get("id");
let goBack=document.querySelector(".goBack-btn")
 let detailsPage=document.querySelector(".details-page")

 const BASE_URL="http://localhost:5000/robots"

async function getData(){
    let response =await axios (`${BASE_URL}/${id}`)
    console.log(response.data);
    detailsPage.innerHTML+=`
    
    <h1>Title: ${response.data.title}</h1>
          <div class="details-text">
            <div class="details-image">
                <img src="${response.data.image}" alt="" />

            </div>
            <div class="details-information">
                <p>Price:1200$</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                  ullam explicabo iusto eos nesciunt, nostrum porro vitae eius
                  asperiores aut perferendis? Placeat consequuntur molestias aut,
                  atque aliquid perferendis quia dicta possimus, quod deserunt
                  cupiditate, temporibus delectus sed magni enim repudiandae neque
                  ducimus! Optio recusandae quis iste vel doloremque voluptates.
                  Obcaecati optio sit quaerat. Dolorem, itaque.
                </p>

            </div>
          </div>
        </div>
    
    
    `

}
console.log(id);


getData()












goBack.addEventListener("click", function(){
    window.history.back("./index.html")
})