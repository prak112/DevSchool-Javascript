// Counting vowels 
/**
 * vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'ä', 'ö'] -- finnish vowels
 * 
 * count the numbers of vowels inside a string
 */

// Test cases
// Test case 1: Counting vowels in an empty string
console.log(countVowels('')); // Expected output: 0

// Test case 2: Counting vowels in a string with no vowels
console.log(countVowels('xyz')); // Expected output: 1

// Test case 3: Counting vowels in a string with only one vowel
console.log(countVowels('HEEYYllo')); // Expected output: 3 -version1, 5 -version2

// Test case 4: Counting vowels in a string with multiple vowels
console.log(countVowels('Programming')); // Expected output: 3

// Test case 5: Counting vowels in a string with Finnish vowels
console.log(countVowels('hääyöaie')); // Expected output: 6 -version1, 7 -version2




// version 1 -OWN- based on Array methods

// step1 - collect vowels in an array
// step2 - check for each vowel in given input with 'input.includes(vowel)' and increment counter

// function countVowels(input) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'ä', 'ö'];
//     if (!input) { return 0; }
//     let counter;
//     for (let vowel of vowels){
//         if (input.toLowerCase().includes(vowel)) { // reads it only once, even if the vowel is present many times
//             counter = ++counter || 1;   // increment or initialize
//         }
//     }
//     return counter;
// }


// // version 2 - based on Regular Exp and '.match'
function countVowels(input) {
    const vowelsInInput = input.match(/[aeiouyäö]/gi) // g-scans through all chars, i-case insensitive
    return vowelsInInput ? vowelsInInput.length : 0;
}


