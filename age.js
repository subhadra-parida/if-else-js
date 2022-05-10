var x = require("readline-sync");
var age = x.questionInt("enter your age: ");

if (age >= 5){
    console.log("you can go to school")
}
if (age >=18 ){
    console.log("you can give vote")
}
if (age >= 21 ){
    console.log("you can drive car")
}
if (age >= 24){
    console.log(" nowyou can marry")
}
if (age >= 25){
    console.log("you can drink any where")
}
if (age >= 80){
    console.log("now your time is over🤣")
}