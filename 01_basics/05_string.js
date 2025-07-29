const name = "Uttam"
const repoCount = 12

// console.log(name + repoCount + "Value") // outdated
// console.log(`Hello my name ${name} and my repo count is ${repoCount}`);

// const gameName = new String('worldChampionship')
const gameName = "world Championship";
// console.log(gameName)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(7));
// console.log(gameName.indexOf('C'))

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-2);
// console.log(anotherString)

const bestString = gameName.split('').reverse().join('');  
// console.log(bestString)

// const newStringOne = "  Uttam    "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://uttam.com/uttam%20kumar"
const urlReady = url.replace('%20','-');
console.log([url,urlReady])

// console.log(url.includes('uttam'))
// console.log(url.includes('shivam'))

console.log(gameName.split(' '))