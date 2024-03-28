/**
 * Problem:
 * Given an integer, reverse its digits.
 *
 * Example:
 * Input: 123
 * Output: 321
 *
 * Input: -456
 * Output: -654
 *
 * Constraints:
 * - The input integer can be positive, negative, or zero.
 * - The reversed integer should not have leading zeros.
 */

// Test Cases
console.log(reverseInteger(123)); // Expected output: 321
console.log(reverseInteger(-456)); // Expected output: -654
console.log(reverseInteger(500)); // Expected output: 5


// version 1 - using built-in methods - Array-related, Math.sign, parseInt
function reverseInteger(input) {
    const reversed = input.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(input);
}

