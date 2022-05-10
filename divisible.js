// var x = 21;
// if (x % 3 == 0){
//     console.log("choco")
// }
// else if (x % 7 == 0){
//     console.log("late")
// }
// else if (x % 3 == 0 && x % 7 == 0){
//     console.log("chocolate")
// }
// else {
//     console.log("it is not divisible by 3 or 7...")
// }



// var num = require("readline-sync")
// var n = num.questionInt("enter any number: ")
// if (n % 2 == 0){
//      console.log("its divisible by 2..")
// }
// else{
//     console.log("its not divisible by 2")
// }



// var num = require("readline-sync");
// var varx = num.questionInt("enter 1st number: ");
// var vary = num.questionInt("enter 2nd number: ");

// if (varx % vary == 0){
//     console.log(varx,"is divisible by",vary);
// }
// else{
//     console.log(varx,"is not divisible by",vary);
// }



var num = require("readline-sync");
var number = num.questionInt("enter any numnber: ");
if (number % 5 === 0 && number % 15 === 0){
    console.log("it is divisible by both")
}
else{
    console.log("not divisibe")
}








