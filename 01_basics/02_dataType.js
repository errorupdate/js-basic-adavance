"use strict"; // Treat all JS as ECMAScript 5+ (modern best practices)

// ===== Variable Declarations =====
let name = "uttam";        // String
let age = 24;              // Number
let is18plus = true;       // Boolean

// ===== Print Values Side by Side =====
console.table([
    { Label: "Name", Value: name },
    { Label: "Age", Value: age },
    { Label: "Is 18+?", Value: is18plus }
]);

// ===== Print Types of Variables =====
console.table([
    { Variable: "name", Type: typeof name },
    { Variable: "age", Type: typeof age },
    { Variable: "is18plus", Type: typeof is18plus }
]);

/*
  NOTE:
  Number      = max ±(2^53 - 1)
  BigInt      = for very large integers
  String      = "", '', or ``
  Boolean     = true or false
  undefined   = default value of unassigned variable
  symbol      = unique value, used for uniqueness (e.g., React keys)
  typeof null = "object" (historical JS quirk)
  typeof undefined = "undefined"
*/
