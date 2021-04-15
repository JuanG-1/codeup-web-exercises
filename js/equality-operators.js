"use strict"

//LOOSE EQUALITY (==)
//LOOSE INEQUALITY (!=)

var num1 = 5;

var maybeNum2 = "5";

console.log(typeof(num1 + maybeNum2));

if (num1 === maybeNum2){
    console.log("These are equivalent");
}

//// STRICT EQUALITY (===)

// the comparators MUST be of the same dat type AND have the same value.