// //Arrays
const myArr = [0, 1, 2, 3, 4, 5]

const myHero = ["iron man", "cap", "spide"]

const myArr2 = new Array(1,2,4,3)
console.log(myArr[4]);


// //Array Methode

myArr.push(6); //Add value in array
console.log(myArr);

myArr.pop()
console.log(myArr); // remove last element

myArr.unshift(9) //add in sharting
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9)); // to check the element present ar not
console.log(myArr.indexOf(8));// To find the index

const newArr = myArr.join()
console.log(newArr);     // It change the type of array into string
console.log(typeof newArr);


//Slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr);

const myn2 = myArr.splice(1,3)  //It cuts array from (n to n)
console.log(myn2);