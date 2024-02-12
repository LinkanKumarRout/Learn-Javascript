// function creation

function sayMyName(){
    console.log("L");
    console.log("I");
    console.log("N");
    console.log("K");
    console.log("A");
    console.log("N");
}

// sayMyName;   // function reference
// sayMyName();    // function execution


// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumber(num1, num2){
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}

const result = addTwoNumber(3, 4);

// console.log("Result is: ",result);

function loginUserMessage(username = "Sam"){
    // if (!username){
    //     console.log("Please enter a username");
    //     return '';
    // }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Linkan"));


// using rest operator

function calculateCartPrice(...num){
    return num;
};
// console.log(calculateCartPrice(100, 200, 300));

const user = {
    username: "Linkan",
    price: 300
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject(
    {
        username: "Sam",
        price: 400
    }
);

let newArray = [100,200,300,400,500];

function findSecondValue(arr){
    return arr[1];
}

// console.log(findSecondValue(newArray));

console.log(findSecondValue([1,2,3,4,5]));
