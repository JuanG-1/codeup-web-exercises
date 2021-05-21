"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor (str) {
    if (str === "blue") {
        console.log("the sky is blue");
    } else if (str === "red") {
        console.log("Cherries are red");
    } else if (str === "cyan") {
        console.log("I don't know anything about cyan");
    } else if (str === "yellow") {
        console.log("Bananas are yellow");
    } else if (str === "green") {
    }else{
        return "i dont know anything about cyan"
    }

}

console.log(analyzeColor(randomColor))
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
/* ########################################################################## */

//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
//     /**
//      * TODO:
//      * Pass the `randomColor` variable to your function and console.log the results.
//      * You should see a different message every time you refresh the page
//      */
//
//     console.log(randomColor);
//
//
//     /**
//      * TODO:
//      * Refactor your above function to use a switch-case statement
//      */
//     function analyzeColors(colors) {
//
//         switch (colors) {
//
//             case"blue":
//                 console.log("blue is the color of the sky!");
//                 break;
//             case"red":
//                 console.log("Strawberry is red");
//                 break;
//             case"cyan":
//                 console.log("I don't know anything about cyan");
//                 break;
//
//
//         }
//     }
//
//     analyzeColors("cyan");
//
//     /**
//      * TODO:
// //      * Prompt the user for a color when the page loads, and pass the input from the
// //      * user to your `analyzeColor` function. Alert the return value from your
// //      * function to show it to the user.
// //      */
// //
// //         console.log(prompt ("What color will you pick. Blue, red or green"));
// //             let colors;
// //         {
// //             if (colors === 'blue') {
// //                 alert("Blue is the color of the sky");
// //             } else if (colors === 'red') {
// //                 alert("strawberry is red");
// //             } else if (colors === 'cyan') {
// //                 alert("I dont know anything about cyan");
// //             }
// //         }
// console.log(analyzeColor(colors));
// /* ########################################################################## */
// /**

//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
// function calculateTotal(luckyNumber, originalPrice){
//     let originalPrice;
//     let results;
//     switch (luckyNumber){
//         case 1:
//             console.log(.10);
//             break;
//         case 2:
//             console.log(.25);
//             break;
//         case 3:
//             console.log(.35);
//             break;
//         case 4:
//             console.log(.50);
//             break;
//         case 5:
//             console.log(1);
//             break;
//         default:
//             return ("nope");
//     }
//     return originalPrice - (originalPrice * luckyNumber);
// }
// alert("This is your total: " + calculateTotal(6, 90))
// console.log(calculateTotal(6, 100))
// /**
// /**
//  */*
//*****

