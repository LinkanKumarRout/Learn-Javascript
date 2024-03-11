// creating a promises

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network call
//     setTimeout(function(){
//         console.log('Async task is completed')
//         resolve(); // this is used to connect resole with .then of promises
//         console.log('Hi');
//     }, 2000);
// });

// consume a promise

// promiseOne.then(function(){
//     console.log('Promise consumed')
// })

// another way of creating promises

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task2');
//         resolve();
//     }, 2000);
// }).then(() => {
//     console.log('Async 2 resolved');
// })

// another promise with data consumption

// const promiseThree = new Promise(function(resolve, reject){
//     // async work
//     setTimeout(function(){
//         resolve({username: "Linkan", email: "linkan@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// Promise with .then(), .catch(), .finally()

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username: "Linkan", email: "linkan@gmail.com"})
//         } else {
//             reject('ERROR: something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("The promise has been resolved or rejected.")
// })

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Linkan", password: "Linkan123"});
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})