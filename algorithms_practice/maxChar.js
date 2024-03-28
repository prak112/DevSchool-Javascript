/*
Problem:
Write a function that takes in a string and returns the character that appears the most frequently in the string. If there are multiple characters that appear the same maximum number of times, return any one of them.

Function Signature:
function maxChar(str: string): string

Input:
- A string 'str' consisting of lowercase and/or uppercase letters.

Output:
- A single character that appears the most frequently in the input string.

Example:
maxChar("Hello World") => "l"
maxChar("abracadabra") => "a"
maxChar("Programming") => "g"

Note:
- The input string will always have at least one character.
- The input string may contain spaces and special characters.
- The function is case-sensitive, so 'A' and 'a' are considered different characters.
*/

// Test Cases:
// console.log(maxChar("Yaba Daba Dooo!")); // Expected output: "a"
// console.log(maxChar("chameleone")); // Expected output: "e"
console.log("Edge Case : " + maxChar("Programming")); // Expected output: "g"
// console.log(maxChar("")); // Expected output: ""
// console.log(maxChar("a")); // Expected output: "a"
// console.log(maxChar("123456789")); // Expected output: "1"



function maxChar(input) {
    const charMap = {};
    let maxValue = 0;
    let maxChar = '';
    
    // version 1 - assign keys and values to charMap using fundamental syntaxes
    // for (let char of input) {
    //     if (charMap[char]) {
    //         charMap[char] += 1;
    //     }
    //     else {
    //         charMap[char] = 1;
    //     }
    // }
    // for (const [key, value] of Object.entries(charMap)){
    //     if (value > maxValue) {
    //         maxValue = value;
    //         maxChar = key;
    //     }
    // }

    // version 2 - shortcut syntax for if-else and for charMap keys
    for (let char of input) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let key in charMap) {
        if (charMap[key] > maxValue) {
            maxValue = charMap[key];
            maxChar = key;
        }

    }
    return maxChar;
}
