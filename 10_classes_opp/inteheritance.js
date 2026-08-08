class User {
    constructor(username) {
        this.username = username
    }

    // Method: Can be called by objects created from the class
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        // super(): Calls the parent class constructor
        super(username)
        this.email = email
        this.password = password
    }

    // Method: Teacher has its own method
    addCourse() {
        console.log(`A new Course was added ${this.username}`);
    }
}

const jaid = new Teacher("jaid", "[jaidmulla@google.com](mailto:jaidmulla@google.com)", "!@#$")
jaid.addCourse()

const mulla = new User("mulla")

mulla.logMe()

// instanceof: Checks whether an object belongs to a class
// console.log(jaid === mulla) // false: They are two different objects

console.log(jaid instanceof mulla);

