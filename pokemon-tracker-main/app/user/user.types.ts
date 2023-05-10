export interface IUser{
    id: string;
    email: string;
    password: string;
    role: number[];
    pokemons: string[]; 
}

export type Users = IUser[];

export type UserPredicate = (u: IUser) => boolean;