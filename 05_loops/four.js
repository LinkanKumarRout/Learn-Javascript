const myObj = {
    js: 'Javascript',
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

for(const key in myObj){ // it returns key on object
    // console.log(`${key} :- ${myObj[key]}`);;
}

let arr1 = ["js", "rb", 'py','java','cpp'];
for (const key in arr1) { // it returns index in case of array
    console.log(arr1[key]);
}

// we can't use for-in loop on map bcz map is non-iterable

