const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumber.map( (num) => num + 10)
console.log(newNums);

const newNums = myNumber.map( (num) => {              //Both hava same meaning
    return num+10
})
console.log(newNums);

myNumber.forEach( function (nums){        //with forEach loop
    console.log(nums+10);
})

//Chaining => one value is pass into next 
const newNums = myNumber.map((num) => num *10).map((num) =>num+1);
console.log(newNums);

const newNums = myNumber.map((num) => num*10).map((num) => num+10).filter((num) => num >= 30)
console.log(newNums);