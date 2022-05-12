// code the change like if I give number as 21, 21 is divisible by both 3 and 7 so 
// it should give Chacolate as answer to me.
// sample inputs and outputs:
// for 21 answer Chacolate
// for 15 answer choco
// for 14 answer late
// for 13 answer Not divisible by 3 , 7

let readline=require("readline-sync")
var number=readline.questionInt("Enter any number=")
if(number%15===0){
   console.log("choco")
}
if(number%21===0){
   console.log("Chocolate")
}
if (number%14===0){
    console.log("late")
}
if (number%13===0){
   console.log("Not divisible by 3 , 7")
}
