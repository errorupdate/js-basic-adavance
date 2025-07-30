// console.log(Temporal.Now.instant()) ---> newest upcoming features
let myDate = new Date()
// console.table({
//     'myDate': myDate,
//     'toString': myDate.toString(),
//     'toDateString': myDate.toDateString(),
//     'toISOString': myDate.toISOString(),
//     'toJSON': myDate.toJSON(),
//     'toLocaleDateString': myDate.toLocaleDateString(),
//     'toLocaleTimeString': myDate.toLocaleTimeString()

// });
// console.table([{
//     'myDate': myDate,
//     'toString': myDate.toString(),
//     'toDateString': myDate.toDateString(),
//     'toISOString': myDate.toISOString(),
//     'toJSON': myDate.toJSON(),
//     'toLocaleDateString': myDate.toLocaleDateString(),
//     'toLocaleTimeString': myDate.toLocaleTimeString()

// }]);
// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toString());
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toString())
// let myTimeStamp = Date.now()/1000
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));
// let newDate = new Date()
// console.log(newDate.getMonth())
console.log(myDate.toLocaleDateString('default',{
    day: "2-digit",
    era: "long"
}))