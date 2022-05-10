var x = require("readline-sync");
var y = x.question("enter ur name? ");
var z = x.questionInt("enter ur age? ");



// normal if /else if / else
if (y == "puja"){
    console.log("true");
}
else if( y == "liza"){
    console.log("false");
}
else{
    console.log("sushree");
};





// nested if

if (y=="puja"){
    if(z=="21"){
        console.log("true")

    }
}
console.log("jj")




// multiple if else
if (z%2==0){
    console.log("it is divisible by two")
}
if (z%3==0){
    console.log("it is divisible by three")
}
if ( z%5==0){
    console.log("it is divisible by five")
}





