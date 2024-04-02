// pokedex library for npm - https://github.com/PokeAPI/pokedex-promise-v2
import Pokedex from 'pokedex-promise-v2';
const pokedex = new Pokedex;

(async() => {
    try{
        const pokemon = await pokedex.getTypeByName('electric')
        //getPokemonByName('pikachu')
        // to display PokemonSprite-front default
        console.log(`Pokemon Name : ${pokemon.name}`)
        console.log(`Pokemon Type :${Object.entries(pokemon.damage_relations)}`)
    }
    catch(err){
        console.log(`Pokedex Malfunction! ERROR: ${err}`)
    }
})()
