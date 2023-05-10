import { PokemonSchema } from "./pokemon.schema";
import { IPokemon, PokemonPredicate } from "./pokemon.types";

const create = (pokemon: IPokemon) => PokemonSchema.create(pokemon);
const read = () => PokemonSchema.read();
const findOne = (callback: PokemonPredicate) => PokemonSchema.findOne(callback);

export default{
    create, read, findOne
}