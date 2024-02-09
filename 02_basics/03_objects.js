// singleton - it getcreated when we create an object from constructer
// Object.create()

// object literals

let mySymbol = Symbol("key1");

let user = {
    name: "linkan",
    "full name": "linkan kumar rout",
    [mySymbol]: "my Key1",
    age: 24,
    location: "odisha",
    email: "linkan@google.com",
    lastLoginDays: ["Monday","Tuesday"]
};

// console.log(user.email);
// console.log(user["email"]);
// console.log(user[mySymbol]);
// console.log(user.full name); // this is wrong

user.email = "linkan@facebook.com";
console.log(user);
// Object.freeze(user);
user.email = "linkan@chatgpt.com";
console.log(user);


user.greetings = function(){
    console.log(`Hello Welcome, ${this.name}`);
}
console.log(user);
console.log(user.greetings());