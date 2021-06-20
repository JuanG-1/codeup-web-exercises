// if (true) {
//     let x = 5;
// }
// console.log(typeof x);


// let numbers = [1, 2, 3, 4, 5];
// numbers.map(n => n * 3)
// console.log(numbers)

const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);