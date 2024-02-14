// scope in Javascript

var c = 300; // global scope

if (true){
    let a = 10;
    const b = 20; // local scope
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const name = "linkan";

    function two(){
        const website = "youtube";
        // console.log(name);
    }
    // console.log(website);
    two();
}
one();


if(true){
    let username = "linkan kumar";
    if(username == "linkan kumar"){
        const website = "youtube";
        // console.log(`${username} ${website}`);
    }
    // console.log(website);
}

// +++++++++++++++++++++++  interesting +++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num + 1;
}

// addTwo(5); // this will give you error bcz of hoisting in JS

const addTwo = function(num){
    return nym + 2;
}
