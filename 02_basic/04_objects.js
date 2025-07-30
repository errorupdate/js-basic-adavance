// singleton

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regualarUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Uttam",
            lastname: "Kumar"
        }
    }
}
console.log(regualarUser.fullname.userfullname.firstname);
// console.log(regualarUser.fullname?.userfullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

// from database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }, {
        id: 2,
        email: "h2@gmail.com"
    },{
        id: 3,
        email: "h3@gmail.com"
    },
]
// console.log(users[1].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))