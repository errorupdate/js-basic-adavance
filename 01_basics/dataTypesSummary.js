/* primitive data type and NON primitive data type*/

/* Primitive Data types */
// 7 types call by value
// string, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
userEmail = undefined;
// didn't defined language
const id = Symbol('123')
const anotherId = Symbol('123')
// console.table([id,anotherId])
// console.log(id === anotherId);

const bigNumber = 34566543234567654323n


// Reference type non-primitive

// Array, Objects, Functions

const heroes = ["shaktiman","naagraj","doga"]

let myObj = {
    name : "Uttam",
    age: 22,
    place : "Patna",
}
// console.log(myObj)

// Function
const myFunction = function(){
    console.log("Hello World!")
}

// myFunction();

// console.log(typeof null)



// ++++++++++++++++++++++++++++++++++++++++++

// stack , Heap

//stack(Primitive) , Heap(Non-Primitive)


let myYoutubeName = "abcdefgh.com"
let anotherName = myYoutubeName;
anotherName = "chai_aur_code"

// console.log(myYoutubeName)
// console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "you_i_am@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)