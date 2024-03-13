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

createUser.prototype.increment = function(){
    this.score++ // this refers to the current context
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}

const chai = new createUser("Chai", 25) // if you don't put new keyword this will not work
const tea = new createUser("tea", 250)

chai.printMe();