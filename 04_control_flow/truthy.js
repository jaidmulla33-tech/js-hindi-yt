const userEmail = "jaid@google.com"   // If string is empty " " then is return 2nd line

if(userEmail){                  //This is truthy because we not check the condition
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//  const userEmail = ""  

// if(userEmail){                  
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }



// falsy values => false, 0, -0, BigInt 0n, "", null , undefined, NaN
// truthy values => "0", 'false', " ", [], {}, function(){} =Empty function


if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("onject is empty");
}



// false == 0  return true;
// false == ''  return true;
//0 == ''  return true;


//Nullish Coalescing operator (??) : null undefined

// let val1;
// val1 = 5 ?? 10      //return 5
// val1 = null ?? 10   //return 10
// val1 = undefined ?? 15   //retuern 15
// val1 = null ?? 10 ?? 20  //return 10

// console.log(val1);


//Terniary Operator
//condition ? true : false

const TeaPrice = 100
TeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");