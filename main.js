// pokedex library for npm - https://github.com/PokeAPI/pokedex-promise-v2
import Pokedex from 'pokedex-promise-v2';
const pokedex = new Pokedex;

document.querySelector('form').onsubmit = (event) => {
    event.preventDefault();
    loadPokemonData();
}

const loadPokemonData = async() => {
    // initialize details
    let pokemonName = document.getElementById('pokemon-name');
    let pokemonImage = document.getElementById('pokemon-image');
    let pokemonDescription = document.getElementById('pokemon-description');
    // list main ability
    

    // clear previous search results
    pokemonName.innerHTML = '';
    pokemonImage.innerHTML = '';
    pokemonDescription.innerHTML = '';
        

    let searchQuery = document.getElementById('search').value;

    try{
        const pokemonData = await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try{
                    const data = await pokedex.getPokemonByName(searchQuery);
                    resolve(data);
                }
                catch(error){
                    reject(error);
                }
            }, 2000);   // delay
        });

        pokemonName.innerHTML += `<p>${pokemonData.name.toUpperCase()}</p>`
        pokemonImage.innerHTML += `<img src="${pokemonData.sprites.front_default}"/>`
        pokemonDescription.innerHTML += `
        <ul>
            <li>Pokemon ID : ${pokemonData.id}</li>
            <li>Pokemon Stats : 
                <ul>
                    <li>Height : ${pokemonData.height}</li>
                    <li>Weight : ${pokemonData.weight}</li>
                    <li>Base XP: ${pokemonData.base_experience}</li>
                </ul>
            </li>
        </ul>`;
    }
    catch(err){
        console.log(`Pokedex Malfunction!\n ERROR: ${err}`)
    }
};

