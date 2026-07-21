//if
// if(true){            //This block runs



// }
// if(false){           //This block not runs

// }

const isUserLoggedIn = true
const temperature = 40

if(temperature <= 50){
    console.log("Less than 40");
}else{
    console.log("More than 40");
}

const score = 200

if(score > 100){
    const power = "Run"       //If use of var insted of const is throw error because var is global
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); // Error because it is out of scope


const balacne = 1000
if(balacne > 500) console.log("test"),         // (,) we add multiple line , not proper mathod
console.log("test2");


// if-else

if(balacne < 500){
    console.log("Less than 500");
}else if(balacne < 750){
    console.log("Less than 750");
}else (balacne < 1200)
    console.log("Less than 1200");




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard){              //and operator need both input true to return true
    console.log("Allow to buy a phone");
}                                              //You can use multiple input 

if(loggedInFromEmail || loggedInFromGoogle){     //OR operator need any one input true to return true
    console.log("Your are able to log-in");
}



console.log(" ")
console.log("Code is Executed");