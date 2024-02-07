const name = "linkan";
const repoCount = 8;

// console.log(name + repoCount + " Values");

// string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // modern way of syntax

let gameName = new String("Linkan Kumar");
// console.log(gameName);
// console.log(gameName.__proto__); // gives a {} which includes all functions

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("I"));

const newString = gameName.substring(0, 4); // can't give negetive index
console.log(newString);

const anotherString = gameName.slice(-11, 5);
console.log(anotherString);

const newString1 = "    Linkan    ";
console.log(newString1);
console.log(newString1.trim());


const url = "https://linkan.com/linkan%20kumar";
console.log(url.replace("%20","_"));

console.log(gameName.includes("Linkan"));

console.log(gameName.split(" "));