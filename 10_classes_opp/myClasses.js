
// ES 6

class User {
constructor(username, email, password) {  // constructor runs on new
    this.username = username;
    this.email = email;
    this.password = password;
}

encryptPassword() {
    return `${this.password}!@#$`
}

changeUsername() {
        return `${this.username.toUpperCase()}`
}
}

const jaid = new User("jaid", "jaidmulla@google.com", "!@#$")

console.log(jaid.encryptPassword())   // () calls method
console.log(jaid.changeUsername());   // Capital


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){  // prototype method
    return `${this.password}!@#$`
}

User.prototype.changeUsername = function(){   // prototype method
return `${this.username.toUpperCase()}`
}

const mulla = new User("mulla", "mulla@gmail.com", "!@#$")

console.log(mulla.encryptPassword);  // function reference
console.log(mulla.changeUsername);   // function reference
```



