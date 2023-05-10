"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../user/user.service"));
const pokemon_repo_1 = __importDefault(require("./pokemon.repo"));
const pokemon_responses_1 = require("./pokemon.responses");
const create = (pokemon) => pokemon_repo_1.default.create(pokemon);
const findAll = () => pokemon_repo_1.default.read();
const findOne = (callback) => {
    const result = pokemon_repo_1.default.findOne(callback);
    if (!result)
        throw pokemon_responses_1.PokemonResponses.POKEMON_NOT_FOUND;
    return result;
};
const add = (credentials) => {
    const pokemon = findAll().find(p => p.id === credentials.pokemonId);
    if (!pokemon)
        throw pokemon_responses_1.PokemonResponses.POKEMON_NOT_FOUND;
    const result = user_service_1.default.add(credentials);
    const { password } = result, userClone = __rest(result, ["password"]);
    return userClone;
};
exports.default = {
    create, findAll, add, findOne
};
