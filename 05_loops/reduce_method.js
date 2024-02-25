// reduce()
// it returns a single value after reducing the array
const arr = [1,2,3,4,5];
// let total = arr.reduce(function(acc, currval){
//     console.log(`acc value is ${acc} and currval is ${currval}`);
//     return acc + currval
// },0);

let total = arr.reduce((acc, currval) => {
    return acc + currval
}, 0);

// console.log(total);

let shoppingCart = [
    {
        itemName: "javascript",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    }
];

let totalPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPay);