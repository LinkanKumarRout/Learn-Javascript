// Truthy and Falsy values
const userEmail = "linkan@gmail.com";

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don'thave user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0",'false', " ", [], {}, function(){}, 

let mails = [];
if(mails.length === 0){
    console.log("Array is empty");
}

let emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false == 0 // true
// false == '' // true
// 0 == "" // true


// Nullish Coalescing Operator (??): used for null & undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 12; // 12
val1 = null ?? 5 ?? 10
console.log(val1);

// Ternary opearator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice < 80 ? console.log("Less than 80") : console.log("Greater than 80");