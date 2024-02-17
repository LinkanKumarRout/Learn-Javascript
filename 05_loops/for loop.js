// for loop

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}
// console.log(element); // error

for(let i = 1; i <= 10; i++){
    // console.log(`Outer loop value is ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`Inner loop value is ${j} and outer loop is ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let arr = ["flash", "batman", "superman"]
console.log(arr.length)
for(let index = 0; index < arr.length; index++){
    const element = arr[index];
    console.log(element);
}







