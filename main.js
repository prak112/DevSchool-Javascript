// pokedex library for npm - https://github.com/PokeAPI/pokedex-promise-v2
import Pokedex from 'pokedex-promise-v2';
const pokedex = new Pokedex;

(async() => {
        const pokemonData = await pokedex.getPokemonByName(['caterpie', 'squirtle', 'pikachu'])
        try{
            // console.log(pokemonData)
            for(let pokemon of pokemonData){
                // TODO: display PokemonSprite- front_default
                // TODO: util.js- titleCase, language conversion,

                console.log(pokemon.name.toUpperCase())
                console.log(`Pokemon ID : ${pokemon.id}`)
                console.log(`Pokemon physical stats :\nHeight : ${pokemon.height}\tWeight : ${pokemon.weight}\tBase XP : ${pokemon.base_experience}XP`)
                // list all abilities
                let mainAbility = pokemon.abilities[0].ability.name
                let abilityURL = pokemon.abilities[0].ability.url

                let getAbilityDescription = (abilityDescription) => {
                    let description = '';
                    abilityDescription.effect_entries.forEach((item) => {
                        if (item.language.name === 'en') {
                            description = item.effect;
                        }
                    });
                    return description !== '' ? description : 'N/A in English';
                };

                let abilityData = await pokedex.getResource(abilityURL);

                console.log(`Pokemon Abilities :\nMain Ability : ${mainAbility}\nDescription :\n${getAbilityDescription(abilityData)}\n`)
                console.log(`Top 5 Pokemon Moves :`)
                pokemon.moves.slice(0, 5).forEach((movesObj, index) => {
                    console.log(`Move #${index + 1} : ${movesObj.move.name}`);
                });
                console.log('\n')
            }
        }
        catch(err){
            console.log(`Pokedex Malfunction!\n ERROR: ${err}`)
        }
})()
