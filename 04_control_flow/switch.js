// switch-case Syntax

// switch(key){
//     case value:
//         break;
        
//     default:
//         break;    
// }


const month = 3                 //If case is string then give all cases should be string

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2 :
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;    
    case 4:
        console.log("Apr");
        break;    

    default:
        console.log("default case match")
        break;
}