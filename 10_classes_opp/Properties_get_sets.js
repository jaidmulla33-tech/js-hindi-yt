```js id="x6y3ra"
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
```

// Quick Revision:
// get → Executes when property is read
// set → Executes when property is assigned
// Object.create() → Creates an object with the given prototype
// Prototype → Object from which another object can inherit properties/methods
// mobile.email → Finds the getter through the prototype chain

```
```
