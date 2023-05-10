import { Roles } from "../role/roles"

export const adminData = [
    {
        email: "admin@gmail.com",
        password: "123",
        role: [Roles.ADMIN, Roles.TRAINER]
    },
    
    {
        email: "vishal@gmail.com",
        password: "123",
        role: [Roles.ADMIN, Roles.TRAINER]
    },
]

export const pokemonData = [
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
]