// ///I want to create an array that takes in a list of names,
// // loops them and in the end stops when it finds the name I want///
//
// var names = ["juan", "jose", "bob", "maria", "james", "trevor", "will", "billy"]
//
// function chooseName(arrayOfNames){
//     for(var i =0; i < arrayOfNames.length; i++){
//         let matches = arrayOfNames.filter(s => s.includes('trevor'))
//         {
//             return matches
//         }
//     }
//
// }
//
// console.log(chooseName(names));
//
// // find all strings in array containing 'thi'
// // const items = ['item 1', 'thing', 'id-3-text', 'class'];
// // const matches = items.filter(s => s.includes('thi'));
//
//

// Write a function called getSquare. It should take in one input and return the square (not square root) of that input as a number.
// If the input is not a number or numeric string, getSquare should return false.



function getSquare(input){
    if(isNaN(Number (input) || input !== "5")){
        return false
    }
    return input * input
}

console.log(getSquare(2, 2))

// Write a function called getReverse. It should take in one input and return the same string, in reverse.
// If the input is not a string (a number, boolean, etc) or is a numeric string ("45"), then return false.

var getReversed = "string"
function getReverse(input){
    if(isNaN(input) || "5" || "boolean"){
        return false
    }
    return getReversed.reverse()
}

console.log(getReversed.reverse)


// Write a function called multiplySquares(). It should take in two inputs, square each input, then return the product of mulitplying them together.
// If the input is not a number (5) or numeric string ("5"), the method should return false

function multiplySquares(input1, input2){
    if(isNaN(Number(input1) || "5" && isNaN (Number(input2) || "5")))  {
        return false
    }
    return Math.pow(input1, input1) * Math.pow(input2, input2)
}

console.log(multiplySquares(2,2))

// Write a function called addTo. It should take in one input and return the result of adding 3 to that input.
// If the input is not a number or numeric string, addTo should return false

function addTo(input){
    if(isNaN(input) || "string"){
    }
    return input + 3;
}

console.log(addTo(4))

//Write a function called subtractFrom. It should take in one input and return the result of subtracting 3 from that input.
// If the input is not a number or numeric string, subtractFrom should return false.

function subtractFrom(input){
    if(isNaN(input) || "string"){
    }
    return input - 3;
}

console.log(subtractFrom(4))

//Write a function called getLowestNumber. It should take in three inputs and determine which input is the lowest number.
// If ANY of the inputs are not numbers or numeric strings, getLowestNumber should return false

function getLowestNumber (input1, input2, input3){
    if(isNaN(input1) || "5" && isNaN(input2) || "5" && isNaN(input3) || "5"){

    }
    return Math.min(input1, input2, input3)
}

console.log(getLowestNumber(15, 98, 3))

//Write a function called isAString. It should take in one input and return true if the input is a string.
// If the input is not a string, then return false

function isAString(input){
    if(input !== "string"){

    }
    return input === "string"
}

console.log(isAString("string"))