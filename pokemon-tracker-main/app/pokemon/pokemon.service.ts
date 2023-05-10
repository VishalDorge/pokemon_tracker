import userService from "../user/user.service";
import { IUser } from "../user/user.types";
import pokemonRepo from "./pokemon.repo";
import { PokemonResponses } from "./pokemon.responses";
import { IPokemon, ISelect, PokemonPredicate } from "./pokemon.types";

const create = (pokemon: IPokemon) => pokemonRepo.create(pokemon);
const findAll = () => pokemonRepo.read();
const findOne = (callback: PokemonPredicate) => {
    const result = pokemonRepo.findOne(callback);
    if(!result) throw PokemonResponses.POKEMON_NOT_FOUND;
    return result;
}

const add = (credentials: ISelect) => {   
    const pokemon = findAll().find(p => p.id === credentials.pokemonId);
    if(!pokemon) throw PokemonResponses.POKEMON_NOT_FOUND;
    const result: IUser = userService.add(credentials);
    const {password, ...userClone} = result;
    return userClone;
}

export default{
    create, findAll, add, findOne
}