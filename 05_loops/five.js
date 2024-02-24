const coding = ['c', 'c++', 'java', 'python', 'ruby', 'javascript'];

// coding.forEach(function (element) {
//     console.log(element);
// });

// coding.forEach((item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// forEach has three parameters access those are value, its index, whole array

// coding.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// })


// most time used concept
const myCoding = [
    {
        language: "javascript",
        filename: 'js'
    },
    {
        language: "java",
        filename: 'java'
    },
    {
        language: "python",
        filename: 'py'
    }
]

myCoding.forEach((item) => {
    console.log(item.language);
})