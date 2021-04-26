(function () {
    "use strict";



    //things to remember
    //.length    .forEach()
    // for LOOP


//
// var days = ["Monday", "Tuesday", "Wednesday"];
//
// days.push("Thursday");
//
// var removedElement = days.pop();
//     console.log(days);
//     console.log("The removed element: " + removedElement);
//     console.log(days.length);

// TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

    // var days = ["Monday", "Tuesday", "Wednesday"];
    // var remDays = ["Thursday","Friday"];
    //
    // remDays.forEach(function(day){
    //     console.log(days + remDays);
    // });





                 
      // .unshift(valueToAdd)   ADDS SOMETHING TO BEGINNING
     // start 0,1,2,3
     //unshift  0,1,2,3
    // w/new  0,1,2,3,4
    //
    // var numArray = [1,2,3,4,5,];
    // console.log(numArray.indexOf(1));   //beginning index
    //
    // numArray.unshift(6)
    // console.log(numArray.indexOf(1))        ///ending index
    // var sortedArray = numArray.sort();
    // console.log(sortedArray);
    //



    // TODO - MINI EXERCISE
   //  -> Let's reverse engineer our days of the week array
    //  -> Make sure to console.log in order to see your code's behavior!
    //  -> Write a function which takes in your complete days of the week array
    //      -> It will eventually return your reverse-engineered array
    //  -> Using a FOR LOOP (not .forEach())
    //      -> pop() each item off the days array
    //      -> use the returned value from pop() to unshift the element
    //      -> on to the new array
    //  -> HINT: You may find that the loop doesn't behave as expected
    //      -> console.log EVERY possible thing which could change as your loop runs
    //          -> consider how the methods you are using change state of the array


var daysOfWeek = ["Monday", "Tuesday", "Wednesday","Thursday","Friday"];

 // remDays.forEach(function(day){
 // days.push(day)
 // })
 //  console.log(days);
 //
 //  function week(arr){
 //       var newArr = [];
 //       var arrLength = (arr.length);
 //      for(var i = 0; i < arrLength; i++ ){
 //          var popped = arr.pop();
 //          newArr.unshift(popped);
 //          console.log(newArr);
 //      }
 //  }
 //                 week(daysOfWeek);
 //
  

  function sortMynums(num1, num2, num3){
      var numArray = [num1, num2, num3];
      console.log(numArray)
      numArray.sort(function(a, b){
          console.log(a)
          console.log(b)
          console.log(a - b)
          return a - b;
      });

           return numArray;
  }

    console.log(sortMynums(13,1,1009));











})();