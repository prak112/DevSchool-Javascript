// FizzBuzz Challenge
/**
 * console logs numbers from 1 to given 'n'
 * for every multiple of 3 - logs 'Fizz'
 * for every multiple of 5 - logs 'Buzz'
 * for multiples of both 3 & 5 - logs 'FizzBuzz'
 */

// version1 -OWN- based on if-elseif-else basics
function fizzBuzz(n) {
    // step1 - loop through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        // step2 - verify if number is divisible by 3 or 5 or both and log the neccessary message
        if (i % 3 === 0 && i % 5 === 0) { console.log(`${i} FizzBuzz`); }
        else if (i % 3 === 0 ) { console.log(`${i} Fizz`); }
        else if (i % 5 === 0) { console.log(`${i} Buzz`); }
        else { console.log(i); }
    }
}

// Test Cases
console.log(fizzBuzz(15)); // Expected output: "1 2 3 Fizz 4 5 Buzz 6 Fizz 7 8 9 Fizz 10 Buzz 11 12 Fizz 13 14 15 FizzBuzz"
console.log(fizzBuzz(21)); // Expected output: "1 2 3 Fizz 4 5 Buzz 6 Fizz 7 8 9 Fizz 10 Buzz 11 12 Fizz 13 14 15 FizzBuzz 16 17 18 Fizz 19 20 Buzz"
console.log(fizzBuzz(7)); // Expected output: "1 2 3 Fizz 4 5 Buzz 6 Fizz 7"