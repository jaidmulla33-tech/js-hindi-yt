// There are two type of data 1: primitive 2: non primitive
// JavaScript is Dynamically typed language Because the ype of variable type   is defind on the run-time.
//Primitive
//Types: String, Number, Boolean, null, undefined, Symbol, BigInt(Scintific or bigVaue)

const score = 100
const valscore = 100.3

const isLoggedIn = false
const outsidetemo = null
let userEmail // return undefined

const id = Symbol('234')
const id1 = Symbol('234')
const BigNumber = 8464546843546n  //n is denote the it value used in BigInt
console.log(id == id1);
console.table([score, valscore, isLoggedIn, outsidetemo, userEmail, BigNumber])

//*********//

//Non primitive
//Referance
//types: Arrays, objects, Functions

const hero = ["iron man", "thor", "spide", "cap"];

let myObj = {
    name: "Jaid",
    age: 20
}

const myfunction = function(){
    console.log("Hello")
}