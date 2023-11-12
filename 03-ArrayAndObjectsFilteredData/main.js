let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

//    const filterName= arr.filter((names)=> names.name[0]==="t")
//    console.log(filterName);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
// forEachName = [];
// arr.forEach((element, index, array) => {
//   if (
//     element.name[0] === "t" &&
//     element.name[element.name.length - 1] === "t"
//   ) {
//     forEachName.push(arr);
//   }
// });
// console.log(forEachName.length);
// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// forEachName = [];
// let sum=0
// arr.forEach((element, index, array) => {
//   if (
//     element.name[0] === "t" &&
//     element.name[element.name.length - 1] === "t"
//   ) {
//     sum+=element.key
//     forEachName.push(arr);
//   }
// });

// console.log(sum);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// let forEachName=[]
// arr.forEach((element,index,array) => {
//     if (element.name[element.name.length-1] === "e") {
//         element.name = "SuperDev"
//         forEachName.push(arr)
//     }

// })
// console.log(forEachName);

// 5) "name"-i en uzun olan obyekti tapin
// const firstItem =arr.slice().sort((a,b)=> (a.name.length>b.name.length ? -1 : 1 ))[0];
// console.log(firstItem.name);

// 6) "name"-i en uzun olan obyektin key'ni tapin
// const firstItem = arr.slice().sort((a,b) => (a.name.length > b.name.length ? -1: 1 ) ) [0]
// console.log(firstItem.key);
 
// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
  
// const filterLength=arr.filter((names)=> names.name.length === 4);
// console.log(filterLength);
// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin
//  const firstItem= arr.slice().sort((a,b) => (a.key > b.key ? -1: 1  ))[0]
// console.log(firstItem.name);
// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.
    const findIndex=arr.indexOf ((element) => element.name ==="l")
    console.log(findIndex);
// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
  // let filterName=arr.filter((item) => {
  //   return item.key>10 && item.name[0] === "l"
  //   })
  //   console.log(filterName);