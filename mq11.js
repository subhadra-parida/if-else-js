// Takes a number as user input. Check if this number is divisible by 5 and 15 both

// If it is divisibe by both prints "Divisible by both".
// else prints "Not divisible by both"

let readlineaSync=require("readline-sync")
var number=readlineaSync.questionInt("Enter anumber")
if (number%5===0 && number%15===0){
    console.log("Number is divisible by both");
}
else{
    console.log("Number is not divisible by both");
}