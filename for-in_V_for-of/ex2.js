/**
 * Exercise 2: Create an array of numbers. 
 * Use a for...of loop to calculate the sum of all the numbers in the array.
 */

const numbers = [2, 3, 35, 67, 23, 78, 13, 89, 123, 56, 7];
let sum = 0;
for (let num of numbers){
    sum += num;
}
console.log(`Sum of array numbers using for...of : ${sum}`);

console.log(`Sum using array.reduce method : ${numbers.reduce((a, b) => a + b)}`);