# Overview
- **Pokedex** is a device for detecting and identifying different types of **Pokemon**
- Replicate a simplified version of a **Pokedex** using *Javascript*

# Sources
- Pokemon free API - [PokeAPI](https://pokeapi.co/docs/v2) 
- General **Pokemon** Info - [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex)
- NPM packages :
    - [Pokedex-Promise-V2](https://github.com/PokeAPI/pokedex-promise-v2)
    - [Pokemon Sprites](https://github.com/PokeAPI/sprites#sprites) - *for app advancements*


# Functionality
- Identify **Pokemon** by 'name'
- On a successful search request(`getPokemonByName`), the application will display :
    - **Pokemon** image, (`Pokemon`- `name`, `PokemonSprites`-`front_default`)
    - Physical and Health stats (`Pokemon`-`base xp`, `height`, `weight`, `PokemonType`-`type`) 
    - Abilities (`PokemonAbility`)
    - Moves or attacks
    - Evolution data (`EvolutionChain`, `EvolutionTrigger`) - *coming soon*

