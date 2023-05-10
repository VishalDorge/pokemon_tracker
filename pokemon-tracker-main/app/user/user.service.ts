import authService from "../auth/auth.service";
import { ICredentials } from "../auth/auth.types";
import pokemonService from "../pokemon/pokemon.service";
import { IPokemon, ISelect } from "../pokemon/pokemon.types";
import { RoleResponses } from "../role/roles";
import userRepo from "./user.repo";
import { UserResponses } from "./user.responses";
import { UserPredicate } from "./user.types";

const create = (credentials: ICredentials) => {
    const user = {role: [RoleResponses.TRAINER], ...credentials, id: '1', pokemons: []};
    const result = userRepo.create(user);
    const {password, ...userClone} = result;
    return userClone;
}

const findOne = (callback: UserPredicate) => {
    const result = userRepo.findOne(callback);
    if(!result) throw UserResponses.INVALID_CREDENTIALS;
    return result;
}

const add = (credentials: ISelect) => {
    
    const user = findOne(u => u.id === credentials.userId);
    const pokemon = pokemonService.findOne(p => p.id === credentials.pokemonId);
    
    const index = user.pokemons?.indexOf(credentials.pokemonId)
    
    if(index === -1){
        user.pokemons?.push(credentials.pokemonId);
        const result = userRepo.add(user);
        return result;
    }
    else return user;
}

const read = async (credentials: ICredentials) => {
    const admin = await authService.findOne(credentials);
    if(!admin.role.includes(RoleResponses.ADMIN)) throw UserResponses.ACCESS_DENIED;
    const users = userRepo.read().filter(u => u.pokemons.length !== 0);
    const result = users.map(u => {
        const {id, email, pokemons, ...uClone} = u;
        const count = pokemons.length;
        return {id, email, count};
    })
    return result;
}

const getUserById = async (credentials: ICredentials, id: string) => {
    const admin = await read(credentials);
    const user = userRepo.read().find(u => u.id === id);
    if(!user) throw UserResponses.INVALID_CREDENTIALS;
    const pokemons: IPokemon[] = pokemonService.findAll().filter(p => user.pokemons.includes(p.id));
    const {email, ...userClone} = user;
    return {email, pokemons};
}

export default{
    create, findOne, add, read, getUserById
}