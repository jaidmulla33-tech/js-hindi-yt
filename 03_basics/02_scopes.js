var c = 300

let a = 300        //Scope mean the value indside it that never leack
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ",a);
}

console.log(a);


function one(){
    const userName = "Jaid"

    function two(){
        const website = "YT"
        console.log(userName)     //in it two cant exicute because it outside on two()
    }
    console.log(website);
    two()
}
one()



if(true){
    const username = "Jaid"
    if(username === "Jaid"){
        const website = "YT"
        console.log(username+website);   //Throw error because we acc. website outside the if
    }
    console.log(website);
}
console.log(username);




//++++++++++++++++//

function addone (num){
    return num+1
}
console.log(addone (7));

const addtwo = function(num){
    return num+2
}
console.log(addtwo(5));