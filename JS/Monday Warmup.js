// //Make a function named trim(string)that removes empty spaces before and after the input, the returns that trimmed string
//
// function trim(input){
//     return input.replaceAll("", " ")
// }
//
// console.log(trim("string"))
// function trim(input){
//     return input.replaceAll("", " ")
// }
//
// // Write a function named cube that returns n * n * n
// // Write a function named cube Root that returns the cube root of the input
//
// function cube(num){
//     return num * num * num
// }
//
// console.log(cube(3))
//
// function cubeRoot(num){
//     return Math.cbrt(num);
// }
//
// console.log(cubeRoot(27))

//
// function last(input){
//     return input.charAt(input.length -4)
// }
//
// console.log(last("change it to all sorts of words"))

//Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//If either of the arguments are not a numeric string or number, return a string message indicating which argument is not a number/numeric string

// function remainder (num, div){
//     if(isNaN(num) || "6" && isNaN(div) || "6"){
//         return "Not a number or String"
//     } return num % div
// }
//
// console.log(remainder(81, 9))


// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *
//
// var rows = 5;
// var columns =5;
//
// for(let i = 0; i<=rows; i++){
//     for(let j = 0; j<=columns; j++){
//
//     }
//     console.log("*")
// }

// function pyramid(n) { //Input or number of rows
//     for (var i = 1; i <= n; i++) {
//         var s = "";
//         for (var j = 1; j <= (2 * n - 1); j++) { ////For every each counter     there exist 2*n-1 value
//             (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " "; //Check   the work book image
//         }
//         console.log(s);
//     }
// }
// pyramid(5);







