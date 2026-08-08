class User {
    constructor(username) {
        this.username = username
    }

    // Method: Can be accessed by instances of the class
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static: Belongs to the class, not to its instances
    static createId() {
        return `12345`
    }
}

const jaid = new User("Jaid")
// console.log(jaid.createId()); // Error: static method cannot be accessed through object

// Inheritance: Teacher gets properties and methods from User
class Teacher extends User {
    constructor(username, email) {
        // super(): Calls the parent class constructor
        super(username)
        this.email = email
    }
}

const mobile = new Teacher("vivo", "Vivo.com")

// Static methods are accessed using the class name, not the object
console.log(mobile.createId()); // Error: createId() is static
// Correct: console.log(Teacher.createId());

