function sayMyName(){
    console.log("U");
    console.log("T");
    console.log("T");
    console.log("A");
    console.log("M");
}
// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1,num2){
    let result = num1 + num2
    return result
}
addTwoNumbers(3, "a")
const result = addTwoNumbers(3, 5)
// console.log("Result: ",result)

function loginUserMessage(username = "User"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
const message = loginUserMessage()
// console.log(message)

const price = [100,200,300, 400,500,600]
function calculateCarPrice(...num1){
    return num1
}
// console.log(calculateCarPrice(...price))

const user = {
    username: "Uttam",
    price: 199
}
function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

// handleObject({
//     username: "Sam",
//     price: 399,
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(200, 400, 500, 1000));
