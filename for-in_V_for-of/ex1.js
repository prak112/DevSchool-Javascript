/**
 * Exercise 1: 
 * Create an object with properties representing a person's name, age, and occupation. 
 * Use a for...in loop to print out all the property names (keys) and corresponding values.
 */
const pokemonBio = {
    'name'  : ['pikachu', 'squirtle', 'bulbasaur', 'caterpie', 'pidgeotto', 'onyx'],
    'age'   : [356, 431, 267, 64, 641, 982],
    'type'  : ['electric', 'water', 'grass', 'grass', 'flying', 'rock'] 
}

// print property names and values
console.log('Pokemons with me :');
for(let key in pokemonBio){
    console.log(`${key} : ${pokemonBio[key]}`);
}