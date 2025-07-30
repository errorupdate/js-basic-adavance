// Investigation Study: Variable Data Types

const accountId = 13122; // Numeric, constant
let accountEmail = "uttam@google.com"; // String, can change
let accountPassword = "3534356"; // String, safe 'let'
let accountCity = "Patna"; // String, safe 'let'

// 1️⃣ Print values in a column view using console.table
console.table([
  { Label: "ID", Value: accountId },
  { Label: "Email", Value: accountEmail },
  { Label: "Password", Value: accountPassword },
  { Label: "City", Value: accountCity }
]);

// 2️⃣ Store account info in an object
const account = {
  ID: accountId,
  Email: accountEmail,
  Password: accountPassword,
  City: accountCity
};

// 3️⃣ Print the object in a row view using console.table
console.table([account]);

// 4️⃣ Print all together in a summary table (single row/record)
console.table([{
  "Account ID": accountId,
  "Email": accountEmail,
  "Password": accountPassword,
  "City": accountCity,
  "Account ID (sum or note)": accountId // Only number, so show as is
}]);
console.table([{
  "Account ID": accountId,
  "Email": accountEmail,
  "Password": accountPassword,
  "City": accountCity,
  "All Values Concatenated": `${accountId}${accountEmail}${accountPassword}${accountCity}`
}]);
