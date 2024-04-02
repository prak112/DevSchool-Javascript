/**
 * Exercise 10: 
 * Create an object with properties representing a product's name, price, and quantity. 
 * Use a for...in loop to calculate the total value of the product (price * quantity)
 */

const pokemonBio = {
    'name'  : ['pikachu', 'squirtle', 'bulbasaur', 'caterpie', 'pidgeotto', 'onyx'],
    'power' : [1356, 431, 467, 564, 641, 982],
    'evolutionLevel'  : ['5', '3', '4', '7', '6', '8'] 
}
// calculate total power = power * evolutionLevel
for(let idx in pokemonBio.name){
    console.log('Pokemon : ' + pokemonBio.name[idx]);
    console.log('Total Power = ' + (pokemonBio.power[idx] * pokemonBio.evolutionLevel[idx]));
    console.log('\n');
}
