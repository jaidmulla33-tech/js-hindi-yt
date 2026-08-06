// Promise = Object representing the eventual completion or failure of an async operation.

const promiseOne = new Promise(function (resolve, reject) {
    // Async task (DB calls, Cryptography, Network requests)

    setTimeout(function () {
        console.log("Async task is complete");
        resolve(); // Connects promise with .then()
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise Consumed");
});


// Promise 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
});


// Promise 3 (Returning data)
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "jaidMulla",
            email: "jaidmulla@code.com",
        });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});


// Promise 4 (Chaining + Catch + Finally)
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;

        if (!error) {
            resolve({
                username: "jaid",
                password: "!@#$%",
            });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username; // Pass value to next .then()
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error); // Handles rejected promise
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    });


// Promise 5 (Async/Await)
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;

        if (!error) {
            resolve({
                username: "js",
                password: "!@#$%",
            });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

async function PromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error); // try...catch handles async errors
    }
}

PromiseFive();


// Fetch API with Async/Await
async function getAllUser() {
    try {
        const response = await fetch(
            "https://api.github.com/users/jaidmulla33-tech"
        );

        const data = await response.json();
        console.log(data); // Print fetched JSON data
    } catch (error) {
        console.log("E:", error); // Handle fetch/network errors
    }
}

getAllUser();


// Quick Reminder:
// resolve() -> Success | reject() -> Failure |
//  .then() -> Handle success |
//  .catch() -> Handle error | .finally() -> Always runs |
//  await waits for Promise inside async function.