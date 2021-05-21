
// this is a mundane task of console logging every element inside the array to create a list
const vacationSpots = ['Chicago', 'Mexico', 'France'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// for loop going forward, inside the for() we need the starting point declared as a var =(starting point) speerated by semi colon then the stopping point; and finally the iterater which will be increment or decrement
// to execute {
//     log the variable name
// }
for (let counter = 5; counter < 11; counter++){
    console.log(counter);
}

// for loop that counts backward with the starting point being the number we want to start with and decreemnt with ---

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}

//looping thourhg arrays///which implements the i = as a variable or iteration and counts with .length in an array and at the end uses i++ as the increment

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i = 0; i < vacationSpots.length ; i++){
    console.log('I would love to visit ' + vacationSpots[i]);
}
///nested loops

// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}
