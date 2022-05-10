var lit = require("readline-sync");
var water = lit.questionInt("enter any number: ");

if (water <= 1 ){
    console.log("more water need to fill..")
}
else if (water > 1 && water < 10){
    console.log("no need to be fill..")
}
else if (water > 10 ){
    console.log("now its over flow..")
}
