console.log("J");
console.log("A");        //need to print the all value onebyone
console.log("I");
console.log("D");


function sayMyName(){
    console.log("J");
    console.log("A");              //pack all value in one function
    console.log("I");
    console.log("D");
}

sayMyName()  //return all value in one

//AddTwoNumber

function addTwoNum (num1, num2){
    console.log(num1+num2);
}
addTwoNum()  // return NAN because not any value provided by user

addTwoNum(3, 4)
addTwoNum(3, "4")  //in these case js take 4 as string and return 34


const result = addTwoNum(5, 6)
console.log("Result: "+result);   //return undefined



//To print with useing const use these

function addTwoNum (num1, num2){
    let result = num1+num2;
    return result
}
const result = addTwoNum(7, 9);
console.log("Result: "+result);  //now it return the value


function loginUserMSG(username){
    return '${username}just loggedin'
}
console.log(loginUserMSG)




function claculateCartPrice(val1, val2, ...num1){  //... is the sprade operator used to add more values
    return num1                    //if there are 2 val then only non val item add in array
}

console.log(claculateCartPrice(222, 400, 433, 4095, 747));

const user ={
    username:"Jadi",
    prices: 200
}
function handleObj(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
}
// handleObj(user)

handleObj({
    username: "Farhan",
    price : 400
})



const myNewArray = [200, 500, 300, 100]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))