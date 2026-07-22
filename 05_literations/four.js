//for in and for of loop

const myObject = {
    js: 'JavaScript',       //Key =>  eg js, cpp, rb, py is the key in these code 
    cpp: 'C++',             //value in left side is the key 
    rb : 'Ruby',
    py : 'Python'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log("the keys is :"+programming[key]);
}



// const map = new Map ()          //map is not iteratable since it not return in loop    
// map.set('IN', "Inaid");
// map.set('FR', "France");
// map.set('DU', "Dubai");

// for (const key in map) {
//     console.log(key);
// }


