const User = {
    _email: 'jaid@google.com',
    _password: "!@#$",

    // Getter: Runs automatically when we read email
    get email() {
        return this._email.toUpperCase()
    },

    // Setter: Runs automatically when we assign a value to email
    set email(value) {
        this._email = value
    }
}

// Object.create(): Creates a new object using User as its prototype
const mobile = Object.create(User)

// Getter is called automatically
console.log(mobile.email);


