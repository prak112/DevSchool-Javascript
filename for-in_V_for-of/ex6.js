/**
 * Exercise 6: Create an object with properties representing a car's make, model, and year. 
 * Use a for...in loop to create a new object that has the same properties 
 * but all values converted to uppercase.
 */

const pokemonBio = {
    'name'  : ['pikachu', 'squirtle', 'bulbasaur', 'caterpie', 'pidgeotto', 'onyx'],
    'age'   : [356, 431, 267, 64, 641, 982],
    'type'  : ['electric', 'water', 'grass', 'grass', 'flying', 'rock'] 
}
const updBio = {};
for(let[key, valueArray] of Object.entries(pokemonBio)){
    updBio[key] = valueArray.map((v) => typeof v == 'string' ? v.toUpperCase() : v);
    console.log(`${key} : ${updBio[key]}`);
}
