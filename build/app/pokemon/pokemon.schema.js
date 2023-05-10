"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSchema = void 0;
const uuid_1 = require("uuid");
class PokemonSchema {
    static create(pokemon) {
        pokemon.id = (0, uuid_1.v4)();
        PokemonSchema.pokemons.push(pokemon);
        return pokemon;
    }
    static findOne(callback) {
        return PokemonSchema.pokemons.find(callback);
    }
    static read() {
        return PokemonSchema.pokemons;
    }
}
exports.PokemonSchema = PokemonSchema;
PokemonSchema.pokemons = [];
