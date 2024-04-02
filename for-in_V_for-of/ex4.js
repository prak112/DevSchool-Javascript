/**
 * Exercise 4: Create an object with properties representing a book's title, author, and number of pages. 
 * Use a for...in loop to print out the property names (keys) only.
 */

const pokemonBio = {
    'name'  : ['pikachu', 'squirtle', 'bulbasaur', 'caterpie', 'pidgeotto', 'onyx'],
    'age'   : [356, 431, 267, 64, 641, 982],
    'type'  : ['electric', 'water', 'grass', 'grass', 'flying', 'rock'] 
}

for(let key in pokemonBio){
    console.log(key);
}