"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_schema_1 = require("./pokemon.schema");
const create = (pokemon) => pokemon_schema_1.PokemonSchema.create(pokemon);
const read = () => pokemon_schema_1.PokemonSchema.read();
const findOne = (callback) => pokemon_schema_1.PokemonSchema.findOne(callback);
exports.default = {
    create, read, findOne
};
