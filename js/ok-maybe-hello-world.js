"use strict";

alert("I swear I won't make you see 'hello world'");

alert("I hope my dogs don't get out again ;/ ");

// MINI EXERCISE
// TODO: I demand a haiku! Using alert, write a haiku!
//     -> The entire poem consists of just three lines, with 17 syllables in total.
//     -> The first line is 5 syllables. -> first alert
//     -> The second line is 7 syllables. -> second
//     -> haha The third line is 5 syllables. -> third

alert("How are you doing")

alert("I am doing awesome bro")

alert("life is but a peach")

alert("silkworms are falling")

alert("my face is covered by worms")

alert("worms are disgusting")

// CONFIRM

var userChoice = confirm("Wold you like to continue")

if (userChoice) {
    console.log("let;s continue");
}else{
    console.log("The user chose: " + userChoice);
}

// PROMPT

var userInput = prompt("What is your favorite movie") .toUpperCase();
alert(userInput);

if (userInput === "The Room"){
    alert("Oh, hi mARK.");
}else{
    alert("You chose: " + userInput);
}