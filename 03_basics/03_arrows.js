//Arrow function syntax
// const num = (num1, num 2) ==>{
//     return num1+num2
// }

const user = {
    username: "Jaid",
    price: 999,
    welcomeMSG : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMSG();
user.username = "Farhan";
user.welcomeMSG();

console.log(this);

function one(){
    console.log(this.username);
}



const two = function(){
    let username = "Jaid"
    console.log(this.username);
}

two() //return undefined

const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(6,7));
