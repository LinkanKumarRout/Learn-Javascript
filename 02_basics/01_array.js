// Arrays in JS

let myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr2[1]);

// ******************* Array methods ************************

// myArr.push(7); // add one element to the last
// console.log(myArr);
// myArr.pop(); // remove last elemet of the array
// console.log(myArr);

myArr.unshift(7); // add one element at the beginning of the array
// console.log(myArr);

myArr.shift(); // remove one element from the beginning of array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

let arr = ["apple", "ball", "cat", "doll", "elephant"];

let arr1 = arr.slice(1,3); // does not include and don't modify original array
console.log(`original array: ${arr}`);
console.log(arr1);

let arr2 = arr.splice(1,3); // remove element from original array and creates a new array
console.log(`original array: ${arr}`);
console.log(arr2);


