// Arrow function

const user = {
    username: "linkan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to our website.`);
        console.log(this);
    }
};
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();
// console.log(this); 

// this keyword is used to refer to the current context/property


// this keyword in editor gives {}
// this keyword in browser console give Window object


// function chai(){
//     let username = "linkan";
//     console.log(this.username); // undefined
// }
// chai();

// let chai = function(){
//     let username = "linkan";
//     console.log(this.username); // undefined
// }
// chai();

// ++++++++++++++++++ arrow function +++++++++++++++++++++++

// let chai = () => {
//     let username = "linkan";
//     console.log(this.username);  // undefined
// }
// chai();

// explicit return, you must use return keyword

// const addTwo = (num1, num2) => {  
//     return num1 + num2;
// }
// console.log(addTwo(4, 6));

// implicit return, no use of return keyword

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(4, 6));

// question may arrise how to return a object without using return keyword

const addTwo = () => ({name: "linkan"});
console.log(addTwo());