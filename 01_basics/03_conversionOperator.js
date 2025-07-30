// === STRING TO NUMBER CONVERSION ===
let score = "33";
// typeof(score) is "string"
let valueInNumber = Number(score);
// typeof(valueInNumber) is "number"
// If score = "33abc", valueInNumber is NaN

/*
  Conversion Examples:
  "33"      --> 33        (number)
  "33abc"   --> NaN       (Not a Number)
  true      --> 1         (number)
  false     --> 0         (number)
*/

// === BOOLEAN CONVERSION ===
// Boolean(1)      --> true
// Boolean(0)      --> false
// Boolean("")     --> false (empty string is false)
// Boolean("Uttam")--> true (non-empty string is true)

// === NUMERIC OPERATIONS ===
let value = 3;
let negValue = -value; // negValue = -3

// Basic arithmetic:
let add = 2 + 2;      // 4
let sub = 2 - 2;      // 0
let mul = 2 * 2;      // 4
let pow = 2 ** 3;     // 8  (2 to the power of 3)
let div = 2 / 3;      // ≈0.6666
let mod = 2 % 3;      // 2

// === STRING OPERATIONS & TYPE COERCION ===
let str1 = "hello";
let str2 = "Uttam";
let str3 = str1 + str2; // "helloUttam"

// Type coercion in addition:
let a = "1" + 2;        // "12" (string)
let b = 1 + "2";        // "12" (string)
let c = "1" + 2 + 2;    // "122" (leftmost string, rest are strings)
let d = 1 + 2 + "2";    // "32" (leftmost number, then "3" + "2" = "32")

// Unary plus
let e = +true;   // 1 (converts true to 1)
let f = +"";     // 0 (empty string to 0)

// === VARIABLE ASSIGNMENT (CHAINED) ===
let num1, num2, num3;
// num1 = num2 = num3 = 2 + 4; // (if uncommented, they all get 6)

// === INCREMENT OPERATOR ===
let gameCounter = 100;
gameCounter++;  // Increases by 1
console.log(gameCounter); // OUTPUT: 101
