// let sale = true;
// sale =false;
// if(sale){
//     console.log("Time to buy!");
// }
//
// let sale = true;
// sale = false;
// if(sale){
//     console.log("Time to buy!");
// } else {
//     console.log("Time to wait for a sale.");
// }
//
// let hungerLevel = 7;
// if(hungerLevel > 7){
//     console.log("Time to eat!");
// }else{
//     console.log("We can eat later!");
// }
//
// let mood = 'sleepy';
// let tirednessLevel = 6;
//
// if(mood  != "sleepy" && tirednessLevel > 8){
//     console.log("time to sleep");
// }else{
//     console.log("not bed time yet");
// }
//
// let wordCount = 1;
//
// if (wordCount) {
//     console.log("Great! You've started your work!");
// } else {
//     console.log('Better get to work!');
// }
//
//
// let favoritePhrase = "";
//
// if (favoritePhrase) {
//     console.log("This string doesn't seem to be empty.");
// } else {
//     console.log('This string is definitely empty.');
// }
//
// let tool = 'marker';
//
// // Use short circuit evaluation to assign  writingUtensil variable below:
// let writingUtensil = tool || "pen"
//
// console.log(`The ${writingUtensil} is mightier than the sword.`);
//
// let isLocked = false;
//
// if (isLocked) {
//     console.log('You will need a key to open the door.');
// } else {
//     console.log('You will not need a key to open the door.');
// }
//
// isLocked ? console.log("You will need a key to open the door.")
//     : console.log("You will not need a key to open the door.");
//
// let isCorrect = true;
//
// if (isCorrect) {
//     console.log('Correct!');
// } else {
//     console.log('Incorrect!');
// }
// isCorrect ? console.log("Correct!")
//     : console.log("Incorrect!");
//
// let favoritePhrase = 'Love That!';
//
// if (favoritePhrase === 'Love That!') {
//     console.log('I love that!');
// } else {
//     console.log("I don't love that!");
// }
//
// favoritePhrase === "Love That!" ? console.log('I love that!')
//     : console.log("I don't love that!");
//
// let season = 'summer';
//
// if (season === 'spring') {
//     console.log('It\'s spring! The trees are budding!');
// } else if(season ==="winter"){
//     console.log('It\'s winter! Everything is covered in snow.');
//
// }else if(season === "fall"){
//     console.log('It\'s fall! Leaves are falling!');
// }else if(season === "summer"){
//     console.log('It\'s sunny and warm because it\'s summer!');
// }else{
//     console.log('Invalid season.');
// }
//
// let athleteFinalPosition = 'first place';
// switch (athleteFinalPosition){
//     case "first place" :
//         console.log("You get the gold medal!");
//         break;
//     case "second place" :
//         console.log("You get the silver medal!");
//         break;
//     case "third place" :
//         console.log("You get the bronze medal!");
//         break;
//     default:
//         console.log("No medal awarded.")
//         break;
// }
//
// var x = "1";
// if(x == 1){
//     console.log("condition 1");
// }else if(x === 2){
//     console.log("condition 2'");
// }else {
//     console.log("its not true");
// }

// "use strict";
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var color = colors[Math.floor(Math.random()*colors.length)];
//
// var favorite = 'red'; // TODO: change this to your favorite color from the list
//
// // TODO: Create a block of if/else statements to check for every color except indigo and violet.
// // TODO: When a color is encountered log a message that tells the color, and an object of that color.
// //       Example: Blue is the color of the sky.
//
// // TODO: Have a final else that will catch indigo and violet.
// // TODO: In the else, log: I do not know anything by that color.
//
// // TODO: Using the ternary operator, conditionally log a statement that
// //       says whether the random color matches your favorite color.
//
// if(color === "red"){
//     console.log("red is the color of blood")
// }else if(color === "orange"){
//     console.log("my cats eyes are orange")
// }else if (color === "yellow"){
//     console.log("yellow is the color of my sofas")
// }else if(color === "green"){
//     console.log("green is the color of the grass")
// }else{
//     console.log("i dont know nothing about that color")
// }
//
// (color === "yellow") ? console.log(color + "is my favorite color") : console.log(color + " that is not my favorite color")

"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var color = colors[Math.floor(Math.random()*colors.length)];
//
// switch (color) {
//     // TODO: create a case statement that will handle every color except indigo and violet
//     // TODO: when a color is encountered log a message that tells the color, and an object of that color
//     //       example: Blue is the color of the sky.
//
//     // TODO: create a default case that will catch indigo and violet
//     // TODO: for the default case, log: I do not know anything by that color.
// }
//
// switch (color){
//     case "red":
//         console.log("red is the color of blood");
//         break;
//     case "orange":
//         console.log("oranges are orange");
//         break;
//     case "yellow":
//         console.log("yellow is the brick road");
//         break;
//     case "green":
//         console.log("green is the grass");
//         break;
//     case "blue":
//         console.log("blue is the sky")
//         break;
//     default:
//         console.log("i dont know anythong about that color")
//
// }
// var i = 5
// while(i < 10){
//     console.log("while loop iterantion #" + i);
//     i++;
// }
//
// var i = 2;
// while(i <= 65536){
//     console.log(i);
//     i = i * 2
// }
//
// for(var i = 0; i < 10; i++){
//     console.log("for loop iteration #" + i);
// }

// for(var i = 100; i >= 5; i-=5){
//     console.log(i );
//     if( i == 50){
//     break;
//     }
// }


var myNameIs = 'Juan'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

// function sayHello(name){
//     console.log("Hello " + name);
// }
// sayHello(myNameIs)
//


// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
//
// function isOdd(number){
//     if( number % 2 === 1){
//         console.log("that number is odd " + number)
//     }else{
//         console.log("that number is even ")
//     }
// }
// isOdd(random)
//

//
// alert("hello how are you");
//
// var confirmed = confirm("are you available to work today? ")
// if(confirmed){
//     alert("you better had said yes!!! ")
//     prompt("how many hours are you avaialbel for ? ")
// }else{
//     alert("lazy bastard")
//
//     prompt("how many hours are you avaialbel for ? ")
// }
//
//
// var userName = prompt("What is your name? ");
// if(userName === "juan"){
//     alert("that is my name too")
// }else{
//     alert("that is the ugliest name ever")
// }

(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // TODO: Create a log statement that will log the number of elements in the names array.

    // TODO: Create log statements that will print each of the names array elements individually.
})();


// var names = ["juan", "jose", "maria", "trevor"];
//
// for( var i = 0; i < names.length; i++);
//
// console.log("there are " + i + names[i])


var names = ["juan", "jose", "maria", "trevor"];


names.forEach(function (element, index,){

console.log('The shape at index ' + index + ' is: ' + element)})

