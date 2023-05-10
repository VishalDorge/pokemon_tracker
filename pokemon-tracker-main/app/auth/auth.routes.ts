import { NextFunction, Request, Response, Router } from "express";
import { ICredentials } from "./auth.types";
import authService from "./auth.service";
import { IUser } from "../user/user.types";
import { ResponseHandler } from "../utility/response.handler";
import { validators } from "./auth.validators";

const router = Router();

router.post("/register", validators, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const credentials: ICredentials = req.body;
        const result: Omit<IUser, "password"> = await authService.create(credentials);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

router.post("/login", validators, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const credentials: ICredentials = req.body;
        const result: Omit<IUser, "password"> = await authService.findOne(credentials);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

export default router;