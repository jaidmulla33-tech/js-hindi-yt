// singleton


// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Jaid",
    [mySym] : "mySym1",  //use[] for symbol type
    email: "jaidmulla@google.com",
    age: 20,
    location: "sangli",
    isLoggedIn: false,
    lastOnline: ["Monday", "Sunday"]
};

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(typeof Jsuser[mySym])



Jsuser.email = "jaidmulla@gpt.com"
Object.freeze(Jsuser)  //It lock all value mean not allow to change after it


Jsuser.greatting = function(){
    console.log("Hello Jsuser");
}

Jsuser.greattingTwo = function(){
    console.log('Hello js user,${this.name}');
}

console.log(Jsuser.greatting);
console.log(Jsuser.greattingTwo());