var number = require("readline-sync");
var num = number.questionInt("enter any number: ");
if (num < 10){
    console.log(num,"is lessthan 10 ")
}
else if (num > 10 && num < 20){
    console.log(num ,"is lessthan 20")
}
else{
    console.log(num,"is greterthan 20")
}


// &&&&&&&&&&&&&&&&&&&&&&&&&

var num = require("readline-sync");
var num1 = num.questionInt("enter 1st number: ");
var num2 = num.questionInt("enter 2nd number: ");
if (num1 > num2){
    console.log(num1,"is greterthan",num2)
}
else{
    console.log(num2,"is greterthan",num1)
}

