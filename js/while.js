// var number = 2
//
// while(number < 65536){
//     console.log(number);
//     number = number * number;
// }

/// DO WHILE

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements


var spacesAvailable = 30;
do {
    spacesAvailable = spacesAvailable - 2;
    console.log(`there are ${spacesAvailable}parking spaces available in this parking lot`);
    if (spacesAvailable === 0) {
        console.log(`this parking lot is now full`);
    }
    while (spacesAvailable) ;
}












