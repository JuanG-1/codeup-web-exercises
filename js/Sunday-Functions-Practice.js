function getReminder() {
    console.log('Water the plants.');
}

function greetInSpanish() {
    console.log('Buenas Tardes.');
}

function sayThanks() /// will sayThanks 3 time on the console
{
    console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks( );
sayThanks( );
sayThanks( );

//function below assigns default parameters to the items and prints out to the console "remeber to buy milk when called in below without assigning the argument
function makeShoppingList(item1 = "milk" , item2 = "bread", item3 = "eggs"){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}


// .
// Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed!
//
//     Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.
//
//     Checkpoint 2 Passed
//
// Stuck? Get a hint
// 2.
// Let’s compute the number of monitors by multiplying rows and columns and then returning the value.
//
//     In the function body of the function you just wrote, use the return keyword to return rows * columns.
//
//     Checkpoint 3 Passed
//
// Stuck? Get a hint
// 3.
// Now that the function is defined, we can compute the number of monitors needed. Let’s say that the office has 5 rows and 4 columns.
//
//     Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.

function monitorCount( rows, columns){
    return rows * columns
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);


//logs false because tuesday is logged instead of Wenesday
const plantNeedsWater = function(day){
    if( day === "Wednesday"){
        return true;
    }else{
        return false;
    }
}
console.log(plantNeedsWater('Tuesday'));