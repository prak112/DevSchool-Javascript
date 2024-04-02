/**
 * Exercise 7: Create an array of numbers. 
 * Use a for...of loop to create a new array that contains only
 * even numbers from the original array.
 */

const numbers = [2, 34, 36, 67, 28, 78, 13, 89, 1238, 56, 7];
//const evenNumbers = numbers.filter((num) => num % 2 === 0);
const evenNumbers = [];
for (let num of numbers){
    if (num % 2 === 0) { evenNumbers.push(num); }
}

console.log(`${evenNumbers}\n${numbers}`);