let form=document.querySelector("form")
let input=document.querySelectorAll(".input")
let textarea=document.querySelector("textarea")
let option=document.querySelector("select")
const BASE_URL="http://localhost:8000/blogs"
const id =new URLSearchParams(window.location.search).get("id")
console.log(id);


async function formData(){
let response= await axios (`${BASE_URL}/${id}`)
// console.log(response.data);
input[0].value=response.data.title,
textarea.value=response.data.body,
option.value=response.data.author
console.log(option);
}


if(id){
    formData()
}

form.addEventListener("submit", function(event){
    event.preventDefault()
  
    let drawcard={
        title:input[0].value,
        body:textarea.value,
        author:option.value
    }
    if (!id) {
      axios.post(`${BASE_URL}`, drawcard)
      
    }else{
        axios.patch(`${BASE_URL}/${id}`, drawcard)
    }
    console.log(input);
    
    input.forEach((item) => {
        item.value=""
    })
    textarea.forEach((item) => {
        item.value=""
    })
    option.forEach((item) => {
        item.value=""
    })
})
