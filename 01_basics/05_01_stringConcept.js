/* *************** String Properties *********/
const myName = "Baba"
// console.log(`The length string is : ${myName.length}`)
const charUsed = myName.length

// ------------ Constructor & static Methods-------
const myAge = "22"
const myPinCode = "800021";
// console.log(String.fromCharCode(72,105));
const greeting = String.fromCharCode(75,121,97);
const emoJi = String.fromCodePoint(10084);

// ----------- Character Extraction ------

const atNeg1 = myName.at(-1)
const at2 = myName.at(2)
const charCodeAt0 = myName.charCodeAt(0)
const codePOintat0 = myName.codePointAt(0)

// console.log('❤️'.codePointAt(0)) // check ascii value of any symbol

// --------->>> Search and Check ( validation)
const isSurname = myName.includes("Kumar")
const indexofName_ab = myName.indexOf("ab")
const lastIndexOfName_ba = myName.lastIndexOf('ba')
const isStart_b = myName.toLowerCase().startsWith("b")
const endWith_ba = myName.endsWith("ba")

//----->>> Substring Extraction
const favoriteCrickter = "Mahendra Singh Dhoni"
const surnameM1 = favoriteCrickter.slice(15,20)
const surnameM2 = favoriteCrickter.substring(15,20)
const surnameM3 = favoriteCrickter.substr(15,20)


// -------->>> Splitting / join
// console.log("a,b,c".split(","));                   // ["a", "b", "c"]
// console.log("Hi".concat(" there!"));               // "Hi there!"

// ----> Matching and replace
// console.log("foo1bar2".match(/\d+/g));                  // ["1", "2"]
// console.log([... "foo1bar2".matchAll(/\d/g)]);          // [["1"], ["2"]]
// console.log("hello world".replace("world", "JS"));      // "hello JS"
// console.log("a+a+a".replaceAll("a", "b"));              // "b+b+b"
// console.log("hello123".search(/\d/));                   // 5

// ------> Padding and repeating
// console.log("5".padStart(3, "0"));                 // "005"
// console.log("Hi".padEnd(4, "!"));                  // "Hi!!"
// console.log("abc".repeat(3));                      // "abcabcabc"


//-----> case conversion & locale
// console.log("hello".toUpperCase());                        // "HELLO"
// console.log("HELLO".toLowerCase());                        // "hello"
// console.log("i".toLocaleUpperCase("tr-TR"));               // "İ"
// console.log("I".toLocaleLowerCase("tr-TR"));               // "ı"

//----> Whitespace trim
// console.log("   hello   ".trim())
// console.log("   hello".trimStart())
// console.log("hello  ".trimEnd())

//----> Unicode and Normalization
// console.log("\u006e\u0303".normalize("NFC"))
// console.log("test".isWellFormed());
// console.log("ab234c".toWellFormed());


// -----> Comparison and Conversion
// console.log("a".localeCompare("e"));
// console.log("abc".toString())
// console.log("abc".valueOf())


//----------> iterator with Symbol.iterator
// for(const ch of "foo") console.log(ch);

// -----> Deprecated HTML Wrapper Methods
// console.log("test".bold())

const me = {
  Name: myName,
  Character: charUsed,
  Greet: `${greeting} ${myName}`,
  PinCode: myPinCode,
  emoJiLove: emoJi,
  CharAtNeg1: atNeg1,
  CharAt2: at2,
  AsciiValueAt0: charCodeAt0,
  isSurname,
  IndexFromName_ab: indexofName_ab,
  lastIndexOfName_ba: lastIndexOfName_ba,
  isStart_b,
  endWith_ba,
  Surname_slice_Method1: surnameM1,
  Surname_slice_Method2: surnameM2,
  Surname_slice_Method3: surnameM3,
};
// console.table(me)

