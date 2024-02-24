// for of loop

const arr = [1, 2, 3, 4, 5];
for (const value of arr) { // you can't use let or var, it returns value in array
    // console.log(value);
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(greet);
}

// Maps - it holdes ordered unique value pairs/ values

const map = new Map();
map.set('IN',"India");
map.set("US", "United States of America");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    'game1': "NFS",
    'game2': "GTA"
}

// for (const [key] of myObj) { // we can't use forof loop on object
//     console.log(key);
// }