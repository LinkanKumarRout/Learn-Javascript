// Javascript Exection Context


// JS is single threaded
/*
// Global Execution Context
when we give code
it first execute Global exection context
'this' created
// Functional Execution Context

// Eval Execution Context

*/
/*
1. Memory creation phase - memory allocation only
2. Execution Phase - calculation
*/

let val1 = 10;
let val2 = 5;
function add(num1, num2){
    let total = num1 + num2;
    return total;
}
let result1 = add(val1, val2);
let result2 = add(10, 11);

// function creates another exection context
// inside that memory phase and execution phase
// it get deleted
// before this it returns to global executional context

// call stack

function One(){
    console.log("One");
    Two();
}
function Two(){
    console.log("Two");
    Three();
}
function Three(){
    console.log("Three");
}
One();
Two();
Three();

/*
Call stack will hold
1. One()
2. Two()
3. Three()

execution context will created for Three() first then Two() then for One()
it works on LIFO - Last In First Out
Three() will be removed first from callstack
then Two() is removed
then One() will be removed

our output will be ----

One
Two
Three
Two
Three
Three
*/