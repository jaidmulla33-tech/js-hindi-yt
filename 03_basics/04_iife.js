// iife (Immediately Invoked Function Expression)

function jd (){
    console.log(`DB CONNECTED`);
}
//jd()  insted of writing it use () for function 

(function jd (){
    console.log(`DB CONNECTED`);   //() function / () execution call ==> ()()
})();      //use ; if not use then next iife not works

(function JDM(){
    //Named IIFE
    console.log(`DB CONNECTED TWO`);
})();

//Arrow fun
(() => {
    console.log(`DBB CONNECTED THREE`);
})();

//Pass th argument
( (name) => { 
    console.log(`DB CONNECTED FOUR ${name}`);
})('Jaid');