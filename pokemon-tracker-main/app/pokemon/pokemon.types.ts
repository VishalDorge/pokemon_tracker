export interface IPokemon{
    id: string;
    name: string;
    type: string;
}

export interface ISelect{
    userId: string;
    pokemonId: string;
}

export type Pokemons = IPokemon[];

export type PokemonPredicate = (p: IPokemon) => boolean;