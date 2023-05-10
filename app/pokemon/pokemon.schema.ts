import { IPokemon, Pokemons, PokemonPredicate } from "./pokemon.types";
import { v4 } from "uuid";

export class PokemonSchema{
    
    private static pokemons: Pokemons = [];
    
    static create(pokemon: IPokemon){
        pokemon.id = v4();
        PokemonSchema.pokemons.push(pokemon);
        return pokemon;
    }

    static findOne(callback: PokemonPredicate){
        return PokemonSchema.pokemons.find(callback);
    }

    static read(){
        return PokemonSchema.pokemons;
    }
}