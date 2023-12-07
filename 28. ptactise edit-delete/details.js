let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details");
let detailsBtn = document.querySelector(".detailsBtn");
const BASE_URL = "http://localhost:8000/blogs";

async function getData() {
  let response = await axios(`${BASE_URL}/${id}`);
  console.log(response.data);
  drawCards(response.data);
}
getData();
function drawCards(data) {
  details.innerHTML = "";

  details.innerHTML += `
          
          <div class="card">
          <div class="card-body">
            <h3 class="card-title">  Title: ${data.title}</h3>
            <div><a class="text">
            <p style="font-size:20px; color:rgb(158, 9, 9); font-weight: 700;">Body:</p>  ${data.body}... 
          </a>
            <p class="card-text">  <p style="font-size:20px; color:rgb(158, 9, 9); font-weight: 700;">Author:</p> ${data.author}</p>
            <p class="text"> <p style="font-size:20px; color:rgb(158, 9, 9); font-weight: 700;">Additional Information:</p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus sit,
            totam tempora perferendis deserunt tenetur exercitationem minima voluptatem
            cumque quo. Vitae animi nostrum recusandae quaerat quasi quos assumenda rerum
            inventore? Odit pariatur explicabo perspiciatis non et, ut quo enim architecto
            culpa labore minima facere est natus ratione adipisci error dolor in quos
            tempora autem a. Minus error nulla dolorum explicabo excepturi maxime ipsum
            itaque maiores officia commodi! Voluptate, minima earum commodi praesentium unde
            modi ratione recusandae in ipsum aliquam doloribus exercitationem similique
            mollitia explicabo maiores facilis, est natus optio ipsam temporibus
            dignissimos! Fugiat eveniet ex ratione repellat recusandae quidem facere
            adipisci itaque. Optio necessitatibus nam illum corrupti. Alias veritatis
            corporis corrupti, aliquam vero maxime nulla deleniti quidem veniam fugiat!
          </p>
            
            <div class="btns">
  
               
            </div>
          </div>
        </div>
          
          
          `;
}

detailsBtn.addEventListener("click", function () {
  window.history.back();
});
