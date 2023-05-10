import { Router } from "express";
import { ICredentials } from "../auth/auth.types";
import userService from "./user.service";
import { ResponseHandler } from "../utility/response.handler";

const router = Router();

router.post("/", async (req, res, next) => {
    try {
        const credentials: ICredentials = req.body;
        const result = await userService.read(credentials);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

router.post("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const credentials: ICredentials = req.body;
        const result = await userService.getUserById(credentials, id);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

export default router;