const user = {           // Object created
    username: "jaidMulla",
    loginCount: 8,
    signedIn: true,      

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); // 'this' refers to the current object.
        console.log(this); // Prints the entire current object.
    }
};

// console.log(user.username);
// console.log(user.getUserDetails()); // Returns undefined because the function only logs a value and doesn't return anything.

const promiseOne = new Promise(() => {}); //Promise constructor requires an executor function.
const date = new Date(); // Allows creating multiple Date object instances.

function User(username, loginCount, isLoggedIn) { // Constructor function
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("Jaid", 12, true); //  Added 'new'
const userTwo = new User("Mulla", 11, false); // User and added 'new'

console.log(User); 

//when we use new it create new object
//step 1: object created
//step 2: inject the value in obj
//step 3:  return value