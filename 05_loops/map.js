let numbers = [1,2,3,4,5,6,7,8,9,10];

// let newNums = numbers.map((num) => { return num+10});

// chaining in JS
let newNums = numbers
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num) => num >= 40)
console.log(newNums);