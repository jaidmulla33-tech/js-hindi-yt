// const appUser = new Object()
// // const appUser = {}

// appUser.id = "123asd"
// appUser.name = "Jaid"
// appUser.isLoggedIn = false

// console.log(appUser)


// const regularUser = {
//     email: "jaidmulla@",
//     fullName: {
//     userFullname :{
//             firstName : "Jaid",
//             lastName : "Mulla"
//         }
//     }   
// }
// console.log(regularUser.fullName.userFullname.firstName)   //? if you dont know data is avilable or not


// // const obj1 = {1: "a", 2: "b"}
// // const obj2 = {3: "c", 4: "d"} 
// // const obj4 = {5: "e", 6: "f"}
// // // const obj3 = {obj1, obj2} //To mearge two object

// // // const obj3 = Object.assign({},obj1, obj2, obj4)  //{} use of these is good practice
// // //const obj3 = {...obj1,...obj2,...obj4}  //Most used and new syntax
// // console.log(obj3);


// console.log(appUser);

// console.log(Object.keys(appUser));  //To accsess key eg. id, name isLoggedin
// console.log(Object.values(appUser)); //To access the valule
// //there are many methods we use

// console.log(appUser.hasOwnProperty('id'))  // ask the property it return boolean value


const course = {
    courseName: "Js in hindi",
    price: "999",
    Teacher: "Jaid"
}

// course.Teacher;
// course.price;

const {courseName} = course
console.log(courseName);

const {courseName: CouName} = course  //Syntax for restructureing the name
console.log(CouName);


// const navbar = (Companey) => {         {
//                                        {   syntax for restructureing in react
//                                        {
// }
// navbar(Companey = "JAID")


//********API*********//   
//API is the eg manue in the hotel

// {
//     "name": "Jaid",
//     "courseName": "Js in hindi"
// }

[
    {},
    {},        //API in array form
    {}
]