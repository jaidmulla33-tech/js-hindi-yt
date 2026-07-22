//for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]
// //syntax of forEach loop
// coding.forEach(function (item) {                //in forEach function not have name
//     console.log(item);
// })


// coding.forEach( (item) => {          //This is arrow function in forEach
//     console.log(item)
// })


// function printMe(item){
//      console.log(item);         //this function need external console.log statement
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "python",
        langFile: "py"
    },
    {
        langName: "CPP",
        langFile: "c++"
    },
]


myCoding.forEach((item) => {
    console.log(item.langFile);
})