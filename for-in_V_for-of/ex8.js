/**
 * Exercise 8: Create an object with properties representing a person's first name, last name, and age. 
 * Use a for...in loop to print out a sentence for each property like 
 * "Person's first name is John".
 */

const pokemonBio = {
    'name'  : ['pikachu', 'squirtle', 'bulbasaur', 'caterpie', 'pidgeotto', 'onyx'],
    'power' : [1356, 431, 467, 564, 641, 982],
    'type'  : ['electric', 'water', 'grass', 'grass', 'flying', 'rock'] 
}

for(let idx in pokemonBio.name){
    console.log(`${pokemonBio['name'][idx].toUpperCase()} is ${pokemonBio['type'][idx].toUpperCase()} type pokemon of Power Level ${pokemonBio['power'][idx]}`);
}
