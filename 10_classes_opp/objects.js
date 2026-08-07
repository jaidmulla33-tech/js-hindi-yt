function multiplyBy5(num) {
    return num * 5;
}

//  Functions are also objects in JavaScript, so we can add custom properties.
multiplyBy5.power = 2;

console.log(multiplyBy5(5));          // 25
console.log(multiplyBy5.power);       // 2

//  Every function automatically gets a prototype object.
//  This prototype is used only when creating objects with the 'new' keyword.
console.log(multiplyBy5.prototype);   // {}

// --------------------------------------------

function createUser(username, score) {
    //  'this' refers to the newly created object when called with 'new'.
    this.username = username;
    this.score = score;
}

// Methods added to prototype are shared by all objects.
// Only one copy of each method exists in memory.
createUser.prototype.increment = function () {
    this.score++;
};

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
};

//  'new' does four things:
// 1. Creates a new empty object {}
// 2. Links it to createUser.prototype
// 3. Sets 'this' to the new object
// 4. Returns the new object automatically

const laptop = new createUser("laptop", 100);

//  Without 'new', 'this' won't refer to a new object.
// In strict mode it becomes undefined; otherwise it refers to the global object.
const mobile = new createUser("mobile", 50);

laptop.printMe();
mobile.printMe();