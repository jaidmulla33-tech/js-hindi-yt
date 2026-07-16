const name = "Jaid"
const age = "20"

// console.log(name + age + "Text");

console.log(`Hello my name is ${name} and my age is ${age} `)  // Modern way to return string name int etc.

const gameName = new String('Jaid Mulla')
console.log(gameName[3]);
console.log(gameName[2]);  //To access the index
console.log(gameName.length) // To find the length of the String
console.log(gameName.toUpperCase(gameName));
console.log(gameName.toLowerCase(gameName));
console.log(gameName.charAt(3)); // to find char index
console.log(gameName.indexOf('M')); //To find the char at index


const newString = gameName.substring(0, 7)
console.log(newString)                     //To read the some part from the main string

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);          //It read the String from back

const newString1 = '     Jaid Mulla     ';
console.log(newString1.trim())          // Used To trim the extra spaces in front and back

const url = "https://localhost%20jaidmulla.com"
console.log(url.replace('%20','-')) //Used For replace the any index
console.log(url.includes('jaid'));  // It return true because string contain the input word
console.log(url.includes('farhan'))  //It return false because String dose not contain input word


console.table([name, age, url,  ])