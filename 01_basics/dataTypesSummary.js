"use strict";

/* ======= Primitive Data Types (Call by Value) ======= */
/*
7 primitive types in JavaScript:
- string
- number
- boolean
- null
- undefined
- symbol
- bigint

Each holds the actual value directly,
and assignments copy the value.
*/

const score = 100;             // number
const scoreValue = 100.3;      // number

const isLoggedIn = false;      // boolean
const outsideTemp = null;      // null (special primitive)
let userEmail;                 // undefined (variable declared but no value assigned)
userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');   // Symbols with same description are unique

console.log("Are Symbols equal? id === anotherId:", id === anotherId); // false

const bigNumber = 34566543234567654323n;  // bigint literal

console.log("Primitive types examples:");
console.table([
    { type: "number", value: score },
    { type: "number", value: scoreValue },
    { type: "boolean", value: isLoggedIn },
    { type: "null", value: outsideTemp },
    { type: "undefined", value: userEmail },
    { type: "symbol", value: id.toString() },
    { type: "bigint", value: bigNumber.toString() },
]);

/* ======= Non-Primitive Data Types (Reference Types, stored on heap) ======= */
/*
They include:
- Objects
- Arrays
- Functions

Assignment copies reference, not the actual data,
so changes affect all references.
*/

const heroes = ["shaktiman", "naagraj", "doga"];  // Array instance

const myObj = {           // Object instance
    name: "Uttam",
    age: 22,
    place: "Patna",
};

// Function expression (Functions are objects too)
const myFunction = function () {
    console.log("Hello World!");
};

// Call function to test
// myFunction();

console.log("typeof null:", typeof null); // typeof null is "object" (historical quirk)

console.log("\n--- Primitive data stored in stack ---");
let myYoutubeName = "abcdefgh.com";
let anotherName = myYoutubeName;  // copy of value
anotherName = "chai_aur_code";

console.log("myYoutubeName:", myYoutubeName);   // "abcdefgh.com"
console.log("anotherName:", anotherName);       // "chai_aur_code"
// Changing anotherName does NOT affect myYoutubeName (call by value)

/* --- Non-primitive data stored in heap (references) --- */

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
};

let userTwo = userOne;   // copy reference, both variables point to same object in memory
userTwo.email = "you_i_am@gmail.com";

console.log("\nAfter modifying userTwo.email:");
console.log("userOne.email:", userOne.email);  // "you_i_am@gmail.com" (changed!)
console.log("userTwo.email:", userTwo.email);  // "you_i_am@gmail.com"
// Changing userTwo reflects in userOne as both point to same object

/* ===== Summary =====
- Primitive types hold actual values and are copied by value.
- Reference types hold memory address pointing to the value stored in heap.
- Assignment of reference types copies the reference, not the object itself.
- Modifications via any reference affect the original data.
- typeof null returns "object" due to legacy reason.
*/

