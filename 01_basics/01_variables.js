const accountId = 121212;
let accountEmail = "linkan@google.com";
var accountPassword = "12345";
accountCity = 'Kendrapara'; // never use this type of declaration

let accountState;



// accountId = 1; // this is not allowed

accountEmail = "lk@gmail.com";
accountPassword = "000000";
accountCity = "Bengaluru";

console.log(accountId);

/*
prefer not to use var because of
scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);
