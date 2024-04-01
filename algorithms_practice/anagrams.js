/*
Problem Statement: Anagrams

Write a function that takes in two strings and determines if they are anagrams of each other. 
An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Your function should return true if the two strings are anagrams, and false otherwise.

Example:
Input:
str = "listen"
str2 = "silent"
Output:
true

Input:
str = "hello"
str2 = "world"
Output:
false

Input:
str = "rail safety"
str2 = "fairy tales"
Output:
true

Input:
str = "abc"
str2 = "cbaa"
Output:
false

Note:
- The input strings will only contain lowercase letters and spaces.
- The input strings may have leading or trailing spaces, which should be ignored when determining if they are anagrams.
- You may assume that the input strings are non-empty.
*/

// Test Cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("RAIL! SAFETY!", "fairy tales")); // true
console.log(isAnagram("abc", "cbaa")); // false

// version 1 -OWN- based on palindromeChecker, 
// BUGGY - Bug#1 -'isAnagram("hello", "world")', Bug#2 - isAnagram("RAIL! SAFETY!", "fairy tales")

// function isAnagram(str, str2) {
//     const compResult = [];
//     if (str.length === str2.length) {   // --> will evaluate true as false for strings without filter for special characters
//         for (let char of str) {
//             compResult.push(str2.includes(char));
//         }
//         if (!compResult.includes(false)) {
//             console.log(compResult);
//             return true;
//         }
//     }
//     else {
//         console.log(compResult);
//         return false;
//     }
// }

// version 2 - using character mapping with filter for special characters

// // step1 - generate character maps after fitlering speacial characters in each string
// function charMap(str) {
//     const charMap = {};
//     let cleanStr = str.toLowerCase().replace(/[\W]/g, '');
//     for (let char of cleanStr) {
//         charMap[char] = ++charMap[char] || 1;
//     }
//     return charMap;
// }
// // step2 - compare character maps
// function isAnagram(str1, str2){
//     const charMap1 = charMap(str1);
//     const charMap2 = charMap(str2);
//     if(Object.keys(charMap1).length !== Object.keys(charMap2).length) { return false; }
//     else {
//         for (let key in charMap1) {
//             if (charMap1[key] !== charMap2[key]) { return false; }
//         }
//         return true;
//     }  
// }


// version 3 - using Array methods, simplified

function isAnagram(str1, str2) {
    let cleanStr = (str) => {
        return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
    }
    return cleanStr(str1) === cleanStr(str2); 
}