// Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.console.log(Reqemlerin cemi: ${sum}, hasili: ${multiply}, ededi ortasi: ${average});

//Task1-1
// let a;
// let first=a%10;
// let second =((a-first)/10)%10;
// let third=((a-first)/10 -second)/10;
// let multiply=first*second *third;
// let averahe=sum/3;
// Task1 - 2;
// function divisors(numbers) {
//   let divisors;
//   for (let i = 1; i <= numbers; i++) {
//     if (numbers % i === 0) {
//       divisors.push(i);
//     }
//     return divisors.length > 1 ? divisors : `${numbers}`;
//   }
//   console.log(divisors(30));
// }
//2

// let a = 30;
// for (let i = 0; i <=a; i++) {
//   if (a % i === 0) {
//     console.log(i);
//   }
// }

// 3)Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// let number = 10;
// let count = 0;
// for (let i = 0; i <= 10; i++) {
//   if (number % i == 0) {
//     count++;
//   }
// }
// console.log(${count});

// task 4

// for (let i = 0; i <=10; i++) {
//   let result = i * i
//    console.log(`${i} * ${i} = ${result}`)
// }
// for (let i = 0; i <= 10; i++) {
//    console.log (`${i} * ${i}= ${i*i}`)
// } ikinci usul
// task 5

// let main = `i  i^2  i^3`;

// console.log (`${main}`);
// for (let i = 0; i<=10; i++) {
//    let powerTwo= i**2;
//    let powerThree=i**3;
//    console.log ( `${i}   ${powerTwo}   ${powerThree}`);
// }

//task6 0-100 arasinda yalniz sade ededleri cap edin
// let isPrime = true;
// let primeNumber = 7;
// for (let i = 2; i < primeNumber; i++) {
//   if (primeNumber % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime == true) {
//   console.log(`${primeNumber} is prime`);
// } else  {
//   console.log(`${primeNumber} is not prime`);
// }
// let bool=true;
// for (let i = 2; i <= 100; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       // console.log(i);
//       bool=false;
//       break;
//     }
//   }
//   if(bool) console.log(i);
//     bool=true;
  
// }

//task 7  tek ededler ve cut ededleri topla
// let oddSum=0;
//  let evenSum=0;
//  for (let i= 1; i <=100; i++) {
//    if((i%2)===0){

//     oddSum+=i;

//    }
//  }
//   console.log (`${oddSum} cut ededlerin cemi`)

//   for (let i = 1; i <=100; i++) {
//     if((i%2)===1){
//         evenSum+=i

//     }

//   }
//   console.log (`${evenSum} tek ededlerin cemi`)
