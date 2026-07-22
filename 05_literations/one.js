//For

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);    
}

// console.log(element);   //Element not have access in out of the oop

for(let i = 0; i <= 10; i++){
    const element = i;
    if(element == 5){
    console.log("5 is the best number");
    }
    console.log(element);
}

for(let i = 0; i <= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 0; j <= 10; j++){
        //console.log(`Outer loop value ${j} and inner value ${i}`);
        console.log(i + '*' + j + '=' + i*j);       //Print tabel

    }
}

// Break and continue


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected");
        break;
    }
    console.log(`value is i is : ${index}`);
    
}



for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(`value is i is : ${index}`);
    
}