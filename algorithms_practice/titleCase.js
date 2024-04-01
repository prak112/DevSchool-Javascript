/**
 * Problem:
 * Given a string, write a function that returns the title case version of every word in the string.
 * Title case means that the first letter of each word should be capitalized and the rest of the letters should be lowercase.
 * Assume that the input string consists of alphabetic characters and spaces only.
 *
 * Example:
 * Input: "hello world"
 * Output: "Hello World"
 *
 * Input: "this is a test"
 * Output: "This Is A Test"
 *
 * Input: "javascript is awesome"
 * Output: "Javascript Is Awesome"
 *
 * Write a function `titleCase` to solve the problem.
 */

// Test cases
console.log(titleCase("hello world")); // Expected output: "Hello World"
console.log(titleCase("this is a test")); // Expected output: "This Is A Test"
console.log(titleCase("javascript is awesome")); // Expected output: "Javascript Is Awesome"

// version 1 - using Array.map method
function titleCase(input) {
    const splitArr = input.split(' ');
    const mappedArr = splitArr.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1, ));
    return mappedArr.join(' ');
}

// version 2 - using for loop
// function titleCase(input) {
//     const words = input.split(' ');
//     const resultArr = [];
//     for (let word of words) {
//         resultArr.push(word[0].toUpperCase() + word.slice(1, ));
//     }
//     return resultArr.join(' ');
// }
