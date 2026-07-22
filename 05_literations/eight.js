const myNums = [1, 2, 3, 4, 5]
                        //acc = accumulator and curval = current value
const myTotal = myNums.reduce(function (acc, curval) {
    console.log(`acc:${acc} ans curval:${curval}`);
    return acc + curval;
}, 0)  // start acc with 0

console.log(myTotal);


const myTotal = myNums.reduce((acc, cur) => acc+cur, 0)
console.log(myTotal);

const shoppingCart = [{
    itemName: "js",
    price: 345
},
{    itemName: "java",
    price: 335
},
{
    itemName: "python",
    price: 645
},
{
    itemName: "ruby",
    price: 393
},
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);