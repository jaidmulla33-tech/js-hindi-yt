//Date

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getTimezoneOffset());

console.log(typeof myDate);  //Date is an object

let myCreatedDate = new Date(2026, 6, 25)
console.log(myCreatedDate.toString());  // Month is start from 0 / convert into String fro readable format

let cusDate = new Date("26-07-25")
console.log(myCreatedDate.toLocaleString());

Time stamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //mili sce time from 1 jan 1970
console.log(myCreatedDate.getTime());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // to return current month


newDate.toLocaleString('dfault',{
    weekday:"long",
    weekday:"narrow",
})