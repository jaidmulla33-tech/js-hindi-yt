class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    // Getter: Runs when we read the property
    get email() {
        return this._email.toUpperCase()
    }

    // Setter: Runs when we assign a value to the property
    set email(value) {
        this._email = value;
    }

    // Getter: Returns a modified value when password is read
    get password() {
        return `${this._password}jaid1234`
    }

    // Setter: Stores the value in a separate property
    set password(value) {
        this._password = value;
    }
}

// Getter and setter are automatically called here
const jaid = new User("jaid@google", "!@#$")

console.log(jaid._password);
console.log(jaid._email);

console.log(jaid.email);
console.log(jaid.password);


//### Quick Revision
// get → Runs when a property is read
// set → Runs when a property is assigned

// _email / _password
// → Commonly used as backing properties

// this.email = value
// → Calls the email setter

// this.email
// → Calls the email getter

// IMPORTANT:
// Getter/setter should not directly use the same property,
// otherwise it can cause infinite recursion.

// Example:
// get email() {
//     return this._email
// }
