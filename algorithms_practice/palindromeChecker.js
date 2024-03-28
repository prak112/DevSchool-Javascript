// Problem: Palindrome Check

// Write a function that takes in a string and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.


// Test Cases:
// - palindromeCheck("racecar") should return true
// - palindromeCheck("hello") should return false
// - palindromeCheck("A man, a plan, a canal, Panama") should return true
// - palindromeCheck("12321") should return true
// - palindromeCheck("algorithm") should return false


console.log(palindromeCheck("telugu"));    // Expected: false
console.log(palindromeCheck("algorithm"));  // Expected: false
console.log(palindromeCheck("12321"));      // Expected: true
console.log("Edge Case : " + palindromeCheck("A man, a plan, a canal, Panama")); // Expected: true
console.log(palindromeCheck("kayak"));      // Expected: true

// version 1 - using reverse string method
// function palindromeCheck(input) {
//     const reversed = input.toLowerCase().replace(/[, ]/g, '').split('').reverse().join('');   // replace all spaces with nothing
//     return reversed === input;
// }


// version 2 - using Array.every method
function palindromeCheck(input) {
    const arr = input.toLowerCase().replace(/[, ]/g, '').split('');
    let isReversible = arr.every((char, index) => char === arr[arr.length - index - 1]);
    return isReversible;
}
