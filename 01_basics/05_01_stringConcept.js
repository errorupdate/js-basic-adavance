"use strict";

/* *************** String Properties *********/
const myName = "Baba";
const charUsed = myName.length; // Total characters in the string

/* ----------- Constructor & Static Methods ----------- */
const myAge = "22"; // String, just for demonstration
const myPinCode = "800021";
const greeting = String.fromCharCode(75, 121, 97); // 'Kya' constructed from char codes
const emoJi = String.fromCodePoint(10084);        // Unicode code point for '❤'

/* ----------- Character Extraction ----------- */
const atNeg1 = myName.at(-1);            // Last character
const at2 = myName.at(2);                 // Character at index 2
const charCodeAt0 = myName.charCodeAt(0); // UTF-16 code at index 0
const codePointAt0 = myName.codePointAt(0); // Codepoint at index 0

/* --------- Search & Check --------- */
const isSurname = myName.includes("Kumar");   // Check if substring "Kumar" exists
const indexofName_ab = myName.indexOf("ab");   // First index of 'ab'
const lastIndexOfName_ba = myName.lastIndexOf("ba"); // Last index of 'ba'
const isStart_b = myName.toLowerCase().startsWith("b"); // Does lowercase string start with 'b'?
const endWith_ba = myName.endsWith("ba");     // Does string end with 'ba'?

/* -------- Substring Extraction -------- */
const favoriteCricketer = "Mahendra Singh Dhoni";
const surnameM1 = favoriteCricketer.slice(15, 20);      // Extract substring using slice (indexes 15-20)
const surnameM2 = favoriteCricketer.substring(15, 20);  // Using substring (similar to slice)
const surnameM3 = favoriteCricketer.substr(15, 20);     // Using deprecated substr (start + length)

/* --------- Object to Display Results --------- */
const me = {
  "Name": myName,
  "Length of Name": charUsed,
  "Greeting (fromCharCode)": greeting,
  "Pin Code": myPinCode,
  "Emoji Love (fromCodePoint)": emoJi,

  /* Character Extraction */
  "Char at -1 (last)": atNeg1,
  "Char at index 2": at2,
  "ASCII code at 0": charCodeAt0,
  "CodePoint at 0": codePointAt0,

  /* Search & Check */
  "Includes 'Kumar'": isSurname,
  "Index of 'ab'": indexofName_ab,
  "Last index of 'ba'": lastIndexOfName_ba,
  "Starts with 'b' (ignore case)": isStart_b,
  "Ends with 'ba'": endWith_ba,

  /* Substring Extraction */
  "Surname slice": surnameM1,
  "Surname substring": surnameM2,
  "Surname substr (deprecated)": surnameM3,
};

/* Print the results nicely in a table with explanations */
console.table(me);

/* Explanation (for your understanding, can be logged or documented): 
- Length: total characters in 'Baba' is 4
- greeting: creates 'Kya' using character codes 75 (K), 121 (y), 97 (a)
- emoJi: prints heart symbol using Unicode 10084 (❤)
- char extraction: extracts characters at given positions or their code values
- searching methods: to find substrings, start/end patterns
- substring extraction: different ways to extract parts of a string
- substr() is deprecated; prefer slice() or substring()
*/
