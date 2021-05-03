const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(famousSayings[0]);

console.log(famousSayings[2]);

console.log(famousSayings[3]);


// .
// Change the second element of the array groceryList to 'avocados'.  the second item would be 1 because the index starts at 0
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
condiments = ['Mayo'];
utensils[3] = 'Spoon'

console.log(utensils);
console.log(condiments);
console.log(condiments);

//logs 3 because there are 3 elements in the Array using the .length property which is a built in javascript method
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// .push after the variable name and in parenthesis allows us to add in elements to the original array
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push("wash the dishes", "do the laundry");

console.log(chores);

// pop() built in method that removes the last element of the array
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores);

/// .shift method removes the first element in an Array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);


