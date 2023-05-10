"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonData = exports.adminData = void 0;
const role_responses_1 = require("../role/role.responses");
exports.adminData = [
    {
        email: "admin@gmail.com",
        password: "123",
        role: [role_responses_1.RoleResponses.ADMIN, role_responses_1.RoleResponses.TRAINER]
    },
    {
        email: "vishal@gmail.com",
        password: "123",
        role: [role_responses_1.RoleResponses.ADMIN, role_responses_1.RoleResponses.TRAINER]
    },
];
exports.pokemonData = [
    {
        id: '1',
        name: "pikachu",
        type: "electric"
    },
    {
        id: '1',
        name: "gengar",
        type: "ghost",
    },
    {
        id: '1',
        name: "garchomp",
        type: "dragon"
    },
    {
        id: '1',
        name: "umbreon",
        type: "dark"
    },
    {
        id: '1',
        name: "charizard",
        type: "fire",
    }
];
