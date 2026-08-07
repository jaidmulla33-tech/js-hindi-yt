function SetUsername(username) {
    // Imagine this function performs complex DB operations.
    this.username = username;
}

function createUser(username, email, password) {

    // call() invokes SetUsername immediately and binds 'this'
    // to the current object created by 'new'.
    SetUsername.call(this, username);

    // Other properties are added to the same object.
    this.email = email;
    this.password = password;
}

const jaid = new createUser("jaid", "jaidmulla.com", "12345");

console.log(jaid);