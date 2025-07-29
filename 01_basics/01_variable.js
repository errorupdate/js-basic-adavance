// Investigation Study
// Variable data types
const accountId = 13122; // easy to read/ increase readability
let accountEmail = "uttam@google.com"; // very widely used
var accountPassword = "3534356"; // not used now a days
accountCity = "Patna"; // bad practice
// accountId = 2 // cannot be change because const cannot be changed
// table form of print console.log

console.table([accountId, accountEmail, accountPassword, accountCity]);

const account = {
  ID: accountId,
  Email: accountEmail,
  Password: accountPassword,
  City: accountCity,
};

console.table(account);
