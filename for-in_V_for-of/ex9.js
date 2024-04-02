/**
 * Exercise 9: 
 * Create an array of strings. Use a for...of loop to print out each string in uppercase.
 */
 
const strings = ['I', 'will', 'never', 'dance', 'again', '!!!', 'just kidding', 'LOL'];
for(let str of strings){
    console.log(str.toUpperCase());
}