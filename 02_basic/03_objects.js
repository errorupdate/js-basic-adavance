"use strict";

// Create a unique Symbol key
const mySym = Symbol("key1");

// Object literal with various property types
const jsUser = {
  name: "Uttam",
  "full name": "Uttam Kumar",
  [mySym]: "myKey1",      // Symbol-keyed property
  age: 18,
  location: "Patna",
  email: "uttam@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// Accessing properties
console.log("jsUser.name:", jsUser.name);                     // Dot notation
console.log("jsUser.email:", jsUser["email"]);                // Bracket notation with string key
console.log("jsUser['full name']:", jsUser["full name"]);     // Bracket notation with space in key

// Symbol-keyed property access
console.log("jsUser[mySym]:", jsUser[mySym]);
console.log("Type of jsUser[mySym]:", typeof jsUser[mySym]);

// Modify email property
jsUser.email = "uttam@chatgpt.com";
console.log("Email before freeze:", jsUser.email);

// Freeze the object to prevent further modifications
// Object.freeze(jsUser);

// Attempt to modify frozen object (this will fail silently in non-strict mode)
jsUser.email = "modified@chatgpt.com";
console.log("Email after freeze and modification attempt:", jsUser.email); // Should remain unchanged

// Add method greeting to jsUser object
jsUser.greeting = function () {
  console.log("Hello js User");
};
console.log("Method jsUser.greeting reference:", jsUser.greeting);
jsUser.greeting(); // Call method

// Add method greeting2 using this to access object properties
jsUser.greeting2 = function () {
  console.log(`Hello js User, ${this.name}`);
};
console.log("Method jsUser.greeting2 reference:", jsUser.greeting2);
jsUser.greeting2(); // Call method

// Bonus: Using Object.create to create an object with jsUser as prototype
const anotherUser = Object.create(jsUser);
console.log("anotherUser.name (inherited):", anotherUser.name);
anotherUser.name = "Another Uttam"; // Override property locally
console.log("anotherUser.name (own property):", anotherUser.name);
console.log("anotherUser.email (inherited):", anotherUser.email);

// Try to modify frozen jsUser through anotherUser
anotherUser.email = "another@chatgpt.com";
console.log("anotherUser.email (own property):", anotherUser.email);
console.log("jsUser.email (still frozen):", jsUser.email);
