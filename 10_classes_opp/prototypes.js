let myName = "Jaid";
let lastName = "Mulla";

//  .length counts all characters including spaces.
// .trim() removes spaces from both ends of a string.
console.log(myName.trim().length);

let myHero = ["thor", "captain"];

// Arrays are objects in JavaScript, so they also inherit from Object.prototype.
let heroPower = {
    thor: "hammer",
    captain: "shield",

    //  Inside an object method, 'this' refers to the object that called the method.
    getThorPower: function () {
        console.log(`thor power is ${this.thor}`);
    }
};

//  Adding a method to Object.prototype makes it available to ALL objects (and arrays).
Object.prototype.jaid = function () {
    console.log(`jaid is present in all objects`);
};

// Inheritance
const user = {
    name: "Jaid",
    email: "jaidmulla@google.com"
};

const student = {
    makeNotes: true
};

const studentSupport = {
    isAvailable: false
};

const STSupport = {
    makeAssignment: "js assignment",
    fullTime: true,

    //  __proto__ links one object to another for inheritance (legacy syntax).
    __proto__: studentSupport
};

//  student can now access properties of user through the prototype chain.
student.__proto__ = user;

//  Modern way to set prototype inheritance.
Object.setPrototypeOf(studentSupport, student);

let anotherUsername = "JaidMulla ";

//  Custom methods can be added to built-in objects using their prototype.
String.prototype.trueLength = function () {

    //  'this' refers to the string object on which trueLength() is called.
    console.log(`${this}`);

    //  Removes extra spaces before calculating the actual length.
    console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"jaid".trueLength();
"mulla".trueLength();