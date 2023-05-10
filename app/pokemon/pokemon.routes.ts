import { Router } from "express";
import pokemonService from "./pokemon.service";
import { ISelect, Pokemons } from "./pokemon.types";
import { ResponseHandler } from "../utility/response.handler";
import { IUser } from "../user/user.types";

const router = Router();

router.get("/", (req, res, next) => {
    try{
        const result: Pokemons = pokemonService.findAll();
        res.send(new ResponseHandler(result));
    }catch(e){
        next(e);
    }
})

router.patch("/select", (req, res, next) => {
    try{
        const credentials: ISelect = req.body;
        const result: Omit<IUser, "password"> = pokemonService.add(credentials);
        res.send(new ResponseHandler(result));
    }catch(e){
        next(e);
    }
})

export default router;