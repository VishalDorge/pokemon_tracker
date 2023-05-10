import { pokemonData } from "./app/utility/constants";
import pokemonService from "./app/pokemon/pokemon.service";
import { adminData } from "./app/utility/constants";
import authService from "./app/auth/auth.service";

import { config } from "dotenv";
config();

import { startServer } from "./app/app";
startServer();

pokemonData.forEach(pokemon => pokemonService.create(pokemon));
adminData.forEach(async (admin) => await authService.create(admin));