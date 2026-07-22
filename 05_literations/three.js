//for of

const arr = [1, 2, 3, 4, 5, 6]

// for (const num of arr) {
//     console.log(num);
// }


// const greating = "Hello Bhai"
// for (const greet of greating) {
//     console.log(`Each char is ${greet}`)
// }


//Maps

// const map = new Map ()               //Map is an object
// map.set('IN', "Inaid");
// map.set('FR', "France");
// map.set('DU', "Dubai");
// //console.log(map);
// //Output =>   Map(3) { 'IN' => 'Inaid', 'FR' => 'France', 'DU' => 'Dubai' }

// for (const key of map) {
//     console.log(key);
// }
// //Output =>  [ 'IN', 'Inaid' ]
// //           [ 'FR', 'France' ]
// //           [ 'DU', 'Dubai' ]



// for (const [key, value] of map) {   //Syntx for saperate the value and key from array
//     console.log(key, ':-', value);
// }
// //Output =>  IN :- Inaid
// //           FR :- France
// //           DU :- Dubai



const myObject = {
    'game1' : 'NFS',
    'game2' : 'BGMI'     // Objects are not iterable
}
for (const [key, value] of myObject) {  //This not work in it
    console.log(key, ':-', value);
}
