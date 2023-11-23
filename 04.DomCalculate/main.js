let calculate=document.querySelector("#calculate")
let calculateSimple=document.querySelector(".calculatesimple")
let number=document.querySelector(".number")
let valueOneInput=document.querySelector(".valueOneInput")
let valueTwoInput=document.querySelector(".valueTwoInput")
let additionBtn=document.querySelector(".additionBtn")
let substractBtn=document.querySelector(".substractBtn")
let multiplyBtn=document.querySelector(".multiplyBtn")
let divisonBtn=document.querySelector(".divisonBtn")
let resetBtn=document.querySelector(".resetBtn")
let textH=document.querySelector(".textH")


calculate.style.display="flex"
calculate.style. justifyContent="center"
calculate.style.background="orange"
calculate.style.width="400px"
calculate.style.padding="30px 80px"
textH.style.textAlign="center"

number.style.outline="none"
number.style.background="black"
number.style.color="white"
number.style.padding="5px 20px"
number.style.width="300px"
number.style.border="none"
number.style.borderRadius="5px"

valueOneInput.style.width="155px"
valueOneInput.style.border="none"
valueOneInput.style.padding="5px"
valueOneInput.style.outline="none"
valueOneInput.style.borderRadius="2px"

valueTwoInput.style.width="155px"
valueTwoInput.style.border="none"
valueTwoInput.style.padding="5px"
valueTwoInput.style.outline="none"
valueTwoInput.style.borderRadius="2px"

additionBtn.style.width="100%"
additionBtn.style.padding="5px 0"
additionBtn.style.border="1px solid black"
additionBtn.style.color="black"

substractBtn.style.width="100%"
substractBtn.style.padding="5px 0"
substractBtn.style.border="1px solid black"
substractBtn.style.color="black"

multiplyBtn.style.width="100%"
multiplyBtn.style.padding="5px 0"
multiplyBtn.style.border="1px solid black"
multiplyBtn.style.color="black"

divisonBtn.style.width="100%"
divisonBtn.style.padding="5px 0"
divisonBtn.style.border="1px solid black"
divisonBtn.style.color="black"

resetBtn.style.width="100%"
resetBtn.style.padding="5px 0"
resetBtn.style.border="1px solid black"
resetBtn.style.color="black"
resetBtn.style.background="red"


let count=0;
let countInterval;
additionBtn.addEventListener("click", function(){
 count= +valueOneInput.value+ +valueTwoInput.value
 number.innerText=count
})
substractBtn.addEventListener("click", function(){
 count= +valueOneInput.value - +valueTwoInput.value
 number.innerText=count
})
multiplyBtn.addEventListener("click", function(){
    count= +valueTwoInput.value * +valueTwoInput.value
    number.innerText=count
})

divisonBtn.addEventListener("click", function(){
    count= +valueOneInput.value / +valueTwoInput.value
    number.innerText=count
} )

resetBtn.addEventListener("click", function(){
    count=0;
    number.innerText=0
    clearInterval(countInterval)
})