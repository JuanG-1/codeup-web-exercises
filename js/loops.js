

 // forward
// var num = 25;
// while(num <=50){
//     console.log("num:" + num);
//     num += 5;
//     console.log("num plus one:");
// }

//    ///backwards infinite loop
// var backwards = 25;
// while(backwards => -10){
//     console.log("starting iteration at:", backwards);
//     backwards = backwards -10;
// }

 // // TODO: MINI EXERCISES
 // // TODO: print all even numbers between 0 and 25;

 // DO WHILE LOOPS/// ALWAYS EXECUTE THE CODE ONCE BEFORE IT IS RUN AGAIN
 //
 // do {
 //
 // } while (condition);

/// example sing happybirthday every year and when they reach 16 say "i got you a car"
//
// var age = 0;
//
// do{
//     age++;
//     console.log(`happy bday! you are now ${age}years old`);
//
// } while(age <16)
//
//  console.log("sorry you are to old for songs but we bought you a car instead");
//
//
//
// /// FOR LOOPS
//
//  for(let i = 0; i <= 10; i++){ //starting point, end point and increment
//      // code to be executed
//      console.log(`hello world ${i}`);
//  }
//
//  for(let x = 10; x <= 25; x++){
//      console.log(x * 2);
//  }
// var carton = 0;
//  for(let eggs = 1; eggs <= 72; eggs++) {
//      console.log("eggs" + eggs);
//      if (eggs % 12 == 0) {
//          carton++;
//      }
//      console.log(`We have filled ${carton} amount of egg cartons with ${eggs} number of eggs`)
//  }
//
//
//  for(let i = 0; i <=10; i++){
//      console.log(i)
//  }

 //WRITE A NESTED LOOP
 // WRITE A NESTED  FOR LOOP THAT COUNTS FROM 1 TO 5 AND THEN FROM 5 TO 1
 //

 // LOOP TO THE COUNT FROM 1 TO 10
 // STARTING POINT
 // RETURN VALUE
 // INCREMENT
 // VARIABLE THAT WILL HOLD COUNT
 // LOGGIN GHT CURRENT COUNT
 //CONDITIONAL-STOPPING POINT



 // TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
 //  odd number, print "odd"
 // // HINT: remember the remainder operator (modulo)

 // for(let i = 0; i <= 30; i++){
 //     if(i % 2 + 2);
 //         console.log(i);
 // }

 // for(let i = 0; i <= 30; i++){
 //  // console.log(i);
 //  if(i % 2 === 0 ){
 //   console.log(i  + " adding 2 to the even number"); //even number and adding 2 to it
 //  }else if( i % 2 !== 0){
 //   console.log("odd")
 //  }
 //
 // console.log(i + "what number is this")

 // }


 // // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
 //  If it's neither print "I'm not playing"
 //  Print "marco polo" if it's divisible by 3 and

for(let i = 0; i<= 40; i++) {
 if (i % 3 === 0) {
  console.log("marco");
  if (i % 5 ) {
   console.log("polo")
  }
 }
}




