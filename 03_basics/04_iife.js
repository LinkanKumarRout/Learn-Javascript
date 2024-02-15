// Immediately Invoked Function Expression (IIFE)


// why we use iife in JS ?
// IIFE helps create a private scope for variables, preventing them from polluting the global scope
// and to execute one function immediately.
(function chai(){ // named iife
    console.log("DB CONNECTED");
})();

function One(){
    let name = "one";
    (function Two(){
        let name1 = "Two";
        // console.log(name1);
    })
    console.log(name);
    // console.log(name1); // this will give you error
};
// One();

((name) => { // unnamed iife
    console.log(`DB CONNECTED ${name}`);
})("Second DB");

// for writing two iife you have end one iife with ;
