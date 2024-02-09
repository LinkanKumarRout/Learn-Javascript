const marvel_heros = ["Captain America", "Iron Man", "Thor", "Spider man"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
let superheros = marvel_heros.concat(dc_heros);
//or you can also do like this
let allHeros = [...marvel_heros, ...dc_heros];

// console.log(marvel_heros);
// console.log(dc_heros);
// console.log(superheros);
// console.log(allHeros);


let arr3 = [1,2,[3,4,5],6,7,[8,9,10,[11,12,13],14],15];
let arr4 = arr3.flat(1);

// console.log(arr3);
// console.log(arr4);


console.log(Array.isArray("linkan"));
console.log(Array.from("linkan"));
console.log(Array.from({name: "linkan"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
