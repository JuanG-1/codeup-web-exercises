"use strict"

//I want a routine that will determine a dog if a dog is infact my dog
//The dog must have fur, have whiskers, and have a name

var hasFur = true;
var hasWhiskers = true;
var nameIsCoda = true;

var isMyDog;

if (hasFur){

    if (hasWhiskers){

        if (nameIsCoda){

            console.log("Who's a good girl?? *bark bark*")
        }

    }
}
//// simpler way to write the code from above is written below

if (hasFur && hasWhiskers && nameIsCoda){
    console.log("Who's a good girl?? * bork bork*");
}

///LOGICAL OR (||)

var creditScore = 720;
var cashOnHand = 3000;

if (creditScore > 680 || cashOnHand > 3000){
    console.log("Congrats! you (the bank) now owns the car!")
}

var hasRequiredScoreOrCash = (creditScore > 680) || (cashOnHand > 3000);

if (hasRequiredScoreOrCash)

    var lengthOfEmployment = 6;

var hasAdequateLengthOfEmployment  = (lengthOfEmployment => 6);

if (hasAdequateLengthOfEmployment && hasRequiredScoreOrCash){
    var purchasedCar
    console.log("Ok, for real. You get a car");
    purchasedCar = true
}

// LOGICAL NOT (!)

console.log( "the inverted value is: " + !!true);





