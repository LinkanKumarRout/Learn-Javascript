// Date from January 1 1970 onwards

let today = new Date();
// console.log(today.toDateString());
// console.log(today.toLocaleTimeString());
// console.log(today.toString());


// let newDate = new Date(2024, 1, 7);
// console.log(newDate.toDateString());

// let myNewDate = new Date(2024, 1, 7, 5, 9);
// console.log(myNewDate.toLocaleString());
// console.log(myNewDate.toLocaleDateString());

// let myTimeStamp = new Date();
// console.log(myTimeStamp.toLocaleString());
// console.log(myTimeStamp.getDate());
// console.log(myTimeStamp.getDay());
// console.log(myTimeStamp.getFullYear());
// console.log(myTimeStamp.getHours());
// console.log(myTimeStamp.getMinutes());

let myDate = new Date();
console.log(myDate.toLocaleString("default", {
    timeZone: "IST",
    hour12: true
}));

// let timeStamp = new Date("07-02-2024");
// console.log(timeStamp);

// date = "2024-02-07";
// console.log(date);
// var date;