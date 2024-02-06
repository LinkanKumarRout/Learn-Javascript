// primitive data types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;
const outsideTemp = null;
let userMail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId); // false


let bigNumber = 325142536548569784521n;
console.log(typeof bigNumber);



// Reference Type/ Non-primitive data types

// Array, Objects, Functions

const heros = ["shaktiman", "nagaraj", "jaga"];
console.log(typeof heros);

let myObj = {
    name: "Linkan",
    age: 24
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);