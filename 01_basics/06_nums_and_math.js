const score = 600
console.log(score)

const balance = new Number(200)
console.log(balance);

console.log(balance.toString()) // convert into string
console.log(typeof(balance)) // To know type

console.log(balance.toFixed(4)) // presion value

const otherNumber = 479.4444
console.log(otherNumber.toPrecision(6));

const newNumber = 100000
console.log(newNumber.toLocaleString('en-IN'))  // To add the , mark to read the number  en-IN denote english-India



//*********MATH********//

console.log(Math);

console.log(Math.abs(-4));  // Absolute value -tive to +tive
console.log(Math.round(4898.543));
console.log(Math.ceil(4.54)); // Pick greater element
console.log(Math.floor(5.6)); //Pick smaller element

console.log(Math.min(3,4,5,6,3));
console.log(Math.max(7,5,53));     //To find min and max value


console.log(Math.random()); // Give random value 0 to 1
console.log(Math.random()*10); // shift value with 1
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)