"use strict";

// Number as primitive and number as object
const score = 400;                // Primitive number
const balance = new Number(100);  // Number object wrapper

console.log([
    score, typeof score,            // 400, 'number'
    balance, typeof balance         // [Number: 100], 'object'
]);

// Number object methods:
console.log(`Length of balance.toString(): ${balance.toString().length}`); // string length of "100" is 3
console.log(`balance.toFixed(2): ${balance.toFixed(2)}`);                 // "100.00" fixed 2 decimals

const otherNumber = 123.8966;
console.log(`otherNumber.toPrecision(3): ${otherNumber.toPrecision(3)}`); // "124" (rounded to 3 significant digits)

const hundreds = 1000000;
// Formatting number as per Indian locale for thousands separator
console.log(`Indian locale formatted number: ${hundreds.toLocaleString('en-IN')}`); // "10,00,000"

// Max numeric value JavaScript can represent
console.log(`Number.MAX_VALUE: ${Number.MAX_VALUE}`);

// ---------- Math Built-in Object ----------
console.log('Math object:', Math);                       // Shows all math functions and constants
console.log(`Absolute value (Math.abs(-4)): ${Math.abs(-4)}`);    // 4
console.log(`Rounded value (Math.round(4.3)): ${Math.round(4.3)}`);  // 4
console.log(`Ceil value (Math.ceil(4.3)): ${Math.ceil(4.3)}`);     // 5 (round up)
console.log(`Floor value (Math.floor(4.9)): ${Math.floor(4.9)}`);  // 4 (round down)
console.log(`Minimum value (Math.min(4,3,6,8)): ${Math.min(4, 3, 6, 8)}`); // 3
console.log(`Maximum value (Math.max(4,3,6,8)): ${Math.max(4, 3, 6, 8)}`); // 8

// Random number between 1 and 10 (inclusive) rounded to 1 significant digit
const randomNum = ((Math.random() * 10) + 1).toPrecision(1);
console.log(`Random number (1-10) with 1 significant digit: ${randomNum}`);

// Generate a random integer between min and max inclusive
const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random integer between ${min} and ${max}: ${randomInRange}`);
