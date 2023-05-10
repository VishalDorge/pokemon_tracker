"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const auth_service_1 = __importDefault(require("../auth/auth.service"));
const pokemon_service_1 = __importDefault(require("../pokemon/pokemon.service"));
const role_responses_1 = require("../role/role.responses");
const user_repo_1 = __importDefault(require("./user.repo"));
const user_responses_1 = require("./user.responses");
const create = (credentials) => {
    const user = Object.assign(Object.assign({ role: [role_responses_1.RoleResponses.TRAINER] }, credentials), { id: '1', pokemons: [] });
    const result = user_repo_1.default.create(user);
    const { password } = result, userClone = __rest(result, ["password"]);
    return userClone;
};
const findOne = (callback) => {
    const result = user_repo_1.default.findOne(callback);
    if (!result)
        throw user_responses_1.UserResponses.INVALID_CREDENTIALS;
    return result;
};
const add = (credentials) => {
    var _a, _b;
    const user = findOne(u => u.id === credentials.userId);
    const pokemon = pokemon_service_1.default.findOne(p => p.id === credentials.pokemonId);
    const index = (_a = user.pokemons) === null || _a === void 0 ? void 0 : _a.indexOf(credentials.pokemonId);
    if (index === -1) {
        (_b = user.pokemons) === null || _b === void 0 ? void 0 : _b.push(credentials.pokemonId);
        const result = user_repo_1.default.add(user);
        return result;
    }
    else
        return user;
};
const read = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield auth_service_1.default.findOne(credentials);
    if (!admin.role.includes(role_responses_1.RoleResponses.ADMIN))
        throw user_responses_1.UserResponses.ACCESS_DENIED;
    const users = user_repo_1.default.read().filter(u => u.pokemons.length !== 0);
    const result = users.map(u => {
        const { id, email, pokemons } = u, uClone = __rest(u, ["id", "email", "pokemons"]);
        const count = pokemons.length;
        return { id, email, count };
    });
    return result;
});
const getUserById = (credentials, id) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield read(credentials);
    const user = user_repo_1.default.read().find(u => u.id === id);
    if (!user)
        throw user_responses_1.UserResponses.INVALID_CREDENTIALS;
    const pokemons = pokemon_service_1.default.findAll().filter(p => user.pokemons.includes(p.id));
    const { email } = user, userClone = __rest(user, ["email"]);
    return { email, pokemons };
});
exports.default = {
    create, findOne, add, read, getUserById
};
