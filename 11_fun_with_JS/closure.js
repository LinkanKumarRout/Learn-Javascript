// inner function has scope access of outer function

// function outer(){
//     let name = 'outer variable';
//     // console.log(secret); // no access

//     function inner(){
//         let secret = '123';
//         // this is called lexical scoping
//         console.log(name); // it can access
//     }

//     function innerTwo(){
//         // console.log(secret); // no access
//         console.log(name);
//     }
//     inner();
//     innerTwo();

// }
// outer();

//----------------------------------------------

// closure

// when we just give reference of inner function it takes whole lexical scope along with it
// although it's execution context is not there bcz
// execution conyext get created when we call a function

function makeFun(){
    const name = 'makeFun variable';
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFun();

myFunc();