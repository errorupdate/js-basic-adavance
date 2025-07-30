"use strict";

// Initial arrays
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];
// Note: Arrays in JS are resizable and can hold mixed data types

// Uncomment to create array using constructor
// const myArr2 = new Array(1, 2, 3, 4);

// Array mutation examples:
// Add elements to the end
// myArr.push(6);
// myArr.push(7);
// Remove element from end
// myArr.pop();

// Add element at beginning
myArr.unshift(9);   // Adds 9 at start
// Remove first element
myArr.shift();      // Removes 9 from start

console.log("Array after unshift and shift (add then remove 9):", myArr);

// Check for presence of element
console.log("Does array include 9?", myArr.includes(9));  // false
console.log("Index of 9 in array:", myArr.indexOf(9));     // -1 (not found)
console.log("Index of 3 in array:", myArr.indexOf(3));     // 3

// Join elements into a string, separated by commas
const newArr = myArr.join();
console.log("Array joined to string:", newArr, typeof newArr); // string

// Slice - extracts a shallow copy of a portion (does NOT modify original)
console.log("Original array before slice:", myArr);
const sliceArr = myArr.slice(1, 3); // includes index 1 but excludes 3
console.log("Sliced portion (index 1 to 2):", sliceArr);
console.log("Original array after slice (unchanged):", myArr);

// Splice - modifies array by removing/adding elements
console.log("Original array before splice:", myArr);
const spliceArr = myArr.splice(1, 3);
// removes 3 elements starting from index 1 (indices 1,2,3 removed)
console.log("Spliced out elements:", spliceArr);
console.log("Original array after splice (modified):", myArr);
