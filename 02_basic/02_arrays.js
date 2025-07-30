"use strict";

// Arrays of Marvel and DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ---------------------------------------------
// Example 1: Adding dc_heros as an element inside marvel_heros (Nested Array)
marvel_heros.push(dc_heros);

console.log("marvel_heros after push (dc_heros array added as nested element):", marvel_heros);

console.log("Access nested element: marvel_heros[3][1] (second DC hero):", marvel_heros[3][1]);

// ---------------------------------------------
// Example 2: Merging arrays using concat() (Non-mutating)
const allHeros = marvel_heros.concat(dc_heros);
console.table(allHeros);

// ---------------------------------------------
// Example 3: Merging arrays using spread operator (ES6+)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log("All heroes combined (spread operator):", all_new_heros);

// ---------------------------------------------
// Example 4: Nested arrays and flattening
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flatten deeply nested arrays into a single-level array
const real_another_array = another_array.flat(Infinity);
console.log("Flattened array from deeply nested structure:", real_another_array);

// ---------------------------------------------
// Array utility methods

// Check if a value is an Array
console.log("Is 'Uttam' an array?", Array.isArray("Uttam")); // false (string)

// Create array from iterable (string) - splits string into characters
console.log("Array.from('Uttam') =>", Array.from("Uttam")); // ['U', 't', 't', 'a', 'm']

// Attempt to create array from an object (non-iterable)
console.log("Array.from({name: 'Uttam'}) =>", Array.from({ name: "Uttam" }));
// Output: [] (empty array because object is not iterable)

// ---------------------------------------------
// Creating arrays with Array.of()
// Instead of new Array(), it's clearer and less error-prone
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log("Array.of(score1, score2, score3) =>", Array.of(score1, score2, score3));
// Output: [100, 200, 300]
