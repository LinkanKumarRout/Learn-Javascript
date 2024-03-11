const newHero = ['hulk', 'iron man'];
/*
    Array -------> Object --------> null
*/

function multplyBy5(num){
    return num*5;
}

multplyBy5.power = 2

console.log(multplyBy5(5));
console.log(multplyBy5.prototype); // this is possible because everything in JS is an object
console.log(multplyBy5.power);


function createUser(username, score){
    this.username = username;
    this.score = score;
}