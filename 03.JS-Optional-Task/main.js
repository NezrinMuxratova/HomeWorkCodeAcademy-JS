// #array-in ilk ve son elementinin cemini return eden function yazin

// const getSum = (array) = > {
    //....
//}
// console.log(getSum([1,2,3]));//4
// console.log(getSum([80,5,58,17,100]));//180
// console.log(getSum([15, -500, 0 , 50]));// 65

const getSum=(array) => {
    let sum;
    for (let i = 0; i < array.length ; i++) {
     sum=(array[0]+ array[array.length-1])
    }
    return sum
};
console.log(getSum([1,2,3]));//4
console.log(getSum([80,5,58,17,100]));//180
console.log(getSum([15, -500, 0 , 50]));// 65


function findElements(array, num) {
    let bool =false;
    for (let i = 0; i < array.length; i++) {
    if (array[i]===number) {
        bool=true
        break
    }
        
    }
    return bool ? `${num} arrayda var` : `${num} arrayda yoxdur `
}
console.log(findElements([]));