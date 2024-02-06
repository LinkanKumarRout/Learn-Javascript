// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 <= 1);
// console.log(2 != 1);


// Avoid below comparision

// console.log("2" > 1); //true
// console.log("02" > 1); // true
// console.log('linkan' > 1); // false

// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(null != 0); // true

/*
The reason is that an equality check == and
comaprision > < <= >= works diferently.

comparision converts null to a number, treating it as 0
thats why null >= 0 is true null > 0 is false
*/

// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false
// console.log(undefined == 0); // false
// console.log(undefined != 0); // true

// === strict type checking
console.log("2" === 2);
console.log(2 == "2");