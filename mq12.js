// People 5 years and above in age can go to school.
// People 18 years and above in age can vote in elections.
// People 21 years and above in age can drive a car.
// People 24 years and above in age can marry.
// People 25 years and above in age can legally drink.
// takes the age of the user as input. 
// console what all activities the user can do from the list above.
let readline=require("readline-sync")
var age=readline.questionInt("Enter any age=");
if (age>=5){
    console.log("You can go to school.")
}
if (age>=18){
    console.log("You can vote in elections.")
}
if (age>=21){
    console.log("You can drive a car.")
}
if (age>=24){
    console.log("You can marry.")
}
if (age>=25){
    console.log("You can legally drink.")
}
