/**
 * Exercise 3: Create an array of strings. 
 * Use a for...of loop to concatenate all the strings into a single string.
 */

const strings = ['I', 'will', 'never', 'dance', 'again', '!!!', 'just kidding', 'LOL'];
let concatString = '';

for(let str of strings){
    concatString += ' ' + str;
}
console.log(concatString);