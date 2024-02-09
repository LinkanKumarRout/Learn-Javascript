// const obj = new Object(); //returns singleton object
// console.log(obj);

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.email = "sam@gmail.com";

// console.log(tinderUser);

let anotherUser = {
    email: "someone@google.com",
    fullname: {
        userFullName: {
            firstname: "linkan kumar",
            lastname: "rout"
        }
    },
    age: 24
};
// console.log(anotherUser.fullname.userFullName.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));