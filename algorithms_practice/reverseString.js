/*
Problem:
Write a function that takes in a string and returns the reverse of that string.

Example:
Input: "world"
Output: "dlrow"

Input: "12345"
Output: "54321"

Input: "racecar"
Output: "racecar"

Input: ""
Output: ""

Note:
- The input string may contain any printable ASCII characters.
- The function should preserve the case of the characters.

*/

// Test Cases
console.log(reverseString("malayali")); // Expected: "ilayalam"
console.log(reverseString("world")); // Expected: "dlrow"
console.log(reverseString("12345")); // Expected: "54321"
console.log(reverseString("racecar")); // Expected: "racecar"
console.log(reverseString("")); // Expected: ""
console.log(reverseString("pikachu")); // Expected: "uhcakip"

// version 1 - using for loop with decrementor

// function reverseString(inputString) {
//     if (inputString == null){
//         return '';
//     }
//     else {
//         let reversedInput = '';
//         for (let i = inputString.length - 1; i >= 0; i--) {
//             reversedInput += inputString[i];
//         }
//         return reversedInput;
//     }
// }


// version 2 - looping each char using 'of' and adding previous element

// function reverseString(input) {
//     let reversed = '';
//     for (let char of input) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }


// version 3 - built-in Array method

function reverseString(input) {
    // const stringArray = input.split('');
    // let reversed = stringArray.reverse().join('');
    // return reversed;
    return input.split('').reverse().join('');
}