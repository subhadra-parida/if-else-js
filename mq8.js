// Take user input in a variable named varx.
// Check if this number is divisible by 2.
// Console that number is divisible by 2 or not
// If number is divisible by 2 console 2 se “divisible hai” else “not divisible”

let readlineSync = require("readline-sync");
var varx=readlineSync.questionInt("enter a number")
if(varx%2===0){
   console.log("Number is divisible.")
}
else{
   console.log("Number is not divisible.")
}