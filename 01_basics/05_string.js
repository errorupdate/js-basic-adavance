"use strict";

const name = "Uttam";
const repoCount = 12;

// Template literal usage (preferred modern way)
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`);
// Output: Hello, my name is Uttam and my repo count is 12.

// String creation (primitive string preferred, not String object)
const gameName = "world Championship";
console.log(`Game Name: ${gameName}`); // Output: world Championship

// Access first character of string
console.log(`First character of gameName: '${gameName[0]}'`); // 'w'

// Display prototype of string (for demonstration; shows string methods available)
console.log("Prototype of gameName:", Object.getPrototypeOf(gameName));

// Length of the string
console.log(`Length of gameName: ${gameName.length}`); // e.g. 18

// Convert string to uppercase
console.log(`gameName in uppercase: ${gameName.toUpperCase()}`); // WORLD CHAMPIONSHIP

// Character at specific index
console.log(`Character at index 7: '${gameName.charAt(7)}'`); // 'C'

// Index of character 'C' in the string
console.log(`Index of 'C' in gameName: ${gameName.indexOf('C')}`); // 6 (indexes start at 0)

// Extract substring using substring(start, end)
const newString = gameName.substring(0, 4);
console.log(`Substring from index 0 to 4: '${newString}'`); // 'worl'

// Extract last two characters using slice with negative index
const anotherString = gameName.slice(-2);
console.log(`Last two characters using slice(-2): '${anotherString}'`); // 'ip'

// Reverse the string by splitting into array, reversing, and joining back
const reversedString = gameName.split('').reverse().join('');
console.log(`Reversed gameName: '${reversedString}'`); // e.g. 'pihsnoisahpC dlrow'

// Demonstration of trimming whitespace from a string
const newStringOne = "  Uttam    ";
console.log(`Original string with spaces: '${newStringOne}'`);
console.log(`Trimmed string: '${newStringOne.trim()}'`); // 'Uttam'

// URL string with encoded space (%20)
const url = "https://uttam.com/uttam%20kumar";
// Replacing encoded space with dash for URL friendliness
const urlReady = url.replace('%20', '-');
console.log("URL before and after replacing '%20' with '-':", [url, urlReady]);

// Check if 'uttam' is included in URL
console.log(`Does URL include 'uttam'? ${url.includes('uttam')}`); // true

// Check if 'shivam' is included in URL
console.log(`Does URL include 'shivam'? ${url.includes('shivam')}`); // false

// Split the gameName string by space into words
const splitGameName = gameName.split(' ');
console.log("gameName split by spaces:", splitGameName); // ['world', 'Championship']
