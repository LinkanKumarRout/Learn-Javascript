// let myName = "Linkan         ";

// console.log(myName.length);

let myHeros = ['Thor', 'Spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: 'Sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.linkan = function(){ // a new function added to every Object
    console.log(`Linkan is present in all Object`)
}

Array.prototype.heyLinkan = function(){
    console.log('Linkan says Hello')
}

// heroPower.linkan();
// myHeros.heyLinkan();

// heroPower.heyLinkan(); // this will not work

// inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingAssistant = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingAssistant
}

// teacher.__proto__ = user; // old approach

// modern style

Object.setPrototypeOf(teachingAssistant, teacher); // link teachingAssistant with teacher

let anotherUsername = "Linkan Kumar      ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength();

"Linkan".trueLength();
"iceTea".trueLength();