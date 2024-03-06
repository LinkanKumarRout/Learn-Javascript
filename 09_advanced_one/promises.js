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

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "Linkan", email: "linkan@gmail.com"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
})
