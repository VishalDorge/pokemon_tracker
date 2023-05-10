import { Route, Routes } from "./routes.types"
import AuthRouter from "../auth/auth.routes";
import PokemonRouter from "../pokemon/pokemon.routes";
import UserRouter from "../user/user.routes";

export const routes: Routes = [
    new Route("/auth", AuthRouter),
    new Route("/pokemon", PokemonRouter),
    new Route("/dashboard", UserRouter)
]