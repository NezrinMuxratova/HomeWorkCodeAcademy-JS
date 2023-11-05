//TASK1

// let rightTriangle= "katet1=3, katet2=4 ,hipotenuz=5";
// if ( rightTriangle ==="katet1=3", "katet2=4", "hipotenuz=5"){
//     console.log("Duzbucaqli ucbucaqdir")
// }else if(rightTriangle === "katet1=3", "katet2=3", "hipotenuz=8" ){
//     console.log("Duzbucaqli ucbucaq deyil")
// }else{
//     console.log("Ucbucaq deyil")
// }

//TASK1 duzgun
// let a;
//let b;
//let c;
// if( a**2+b**2===c**2 ||  a**2+c**2===b**2 ||  c**2+b**2===a**2  ){
//     console.log("Duzbucaqli ucbucaqdir")
// }else{
//     console.log("Duzbucaqli ucbucaq deyil")
// }

// TASK2 duzgun


// let number =652;
// let modulus=10;
//   console.log(65%35, 347%30)

// let number =385;
// let first = number % 10
//let second = ((number - first)/10)%10;
//  let third = (((number - first)/10)-second)\10
//   console.log( `${third} `, ${second}, ${first}))


//Task 3
// let month = "January";
// switch (month) {
//   case  "January" :
//    console.log("January has 31 days") ;
//     break;
//   case "February":
//    console.log( "February has 28 days");

//     break;
//   case "March":
//     console.log("March has 31 days") ;

//     break;
//   case "April":
//    console.log("April has 30 days") ;

//     break;
//   case "May":
//     console.log("May has 31 days") ;

//     break;
//   case "June":
//     console.log(  "June has 30 days");

//     break;
//   case "July":
//     console.log("July has 31 days");

//     break;
//   case "August":
//     console.log("August has 31 days");

//     break;
//   case "September":
//     console.log("September has 30 days")  ;

//     break;
//   case "October":
//     console.log ("October has 31 days") ;

//     break;
//   case "November":
//     console.log( "November has 30 days");

//     break;
//   case "December":
//     console.log("December has 31 days") ;

//     break;

//   default:
//     break;
// }

//TASK 3 ELAVE
// let month = " " .toLocaleLowerCase();
// switch (month) {
//   case "January":
//   case "March":
//   case "May":
//   case "June":
//   case "August":
//   case "October":
//   case "December":
//     console.log ( `${month} has 31 days`)
//     break;
// case:
//   default:

//     break;
// }

//TASK 4
// let a= 6;
// if(a%2==0 ){
//   console.log(  `${a} cut ededdir`)
// }else {
//   console.log(  `Tek ededdir`)
// }

//TASK 1-1
// let a=11;
// let b=7;
// let c=4;
// if((a+b >a+c)&&(a+b>b+c)){
//   console.log(  `Big sum result ${a} and ${b}`)
// }else if ((b+c>a+c)&&(b+c>a+b)){
//   console.log(  `Bis sum result ${b} and ${c}`)
// }else if ((a+c>b+c && a+c>a+b)){
//   console.log(  `Big sum result ${a} and ${c}`)
// }

//TASK 1-2
// let d = 3;
// let e = 7;
// let f = 2;
//max-732
//min-237
// let maxDigit;
// let minDigit;

// if (a > b && a > c) {
//   if (b > c) {
//     console.log(maxDigit);
//     maxDigit = a * 100 + b * 10 + c;
//     minDigit = c * 100 + b * 10 + a;
//   } else {
//     maxDigit = a * 100 + c * 10 + b;
//     minDigit = b * 100 + c * 10 + a;
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     maxDigit = b * 100 + a * 10 + c;
//     minDigit = c * 100 + a * 10 + b;
//   }
// } else {
//   if (a > b) {
//     console.log(maxDigit);
//     maxDigit = c * 100 + a * 10 + b;
//     minDigit = b * 100 + a * 10 + c;
//   } else {
//     maxDigit = c * 100 + b * 10 + a;
//     minDigit = a * 100 + b * 10 + c;

//   }
// }

// console.log("MAX:", maxDigit);
// console.log("MIN:", minDigit);

//TASK 6
// let a=2;
// let b=2;
// let c=2;
// if(a=b=c){
//   console.log(  `Beraberterefli ucbucaqdir`)
// }else {
//   console.log(  `Beraberterefli ucbucaq deyil`)
// }

//TASK 7
// let a = 2;
// let b = 8;
// let c = 4;
// if (a == b &  b == c & a == c) {
//   console.log(`Beraberyanli ucbucaqdir`);
// } else{ 
//   console.log(`Beraberyanli ucbucaq deyil`);
// }

//TASK 8
// let a=3;
// let b=4;
// let c=5;
// if( a+b>c && Math.abc(a-b)<c || a+c> b  && Math.abc(a-c)<b ){
// console.log(  `Ucbucaqdir`)
// }else{
//   console.log(  `Ucbucaq deyil` )
// }