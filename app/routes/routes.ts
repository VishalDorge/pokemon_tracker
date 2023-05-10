import { Application, NextFunction, Request, Response, json } from "express"
import { ResponseHandler } from "../utility/response.handler";
import { routes } from "./routes.data";

export const registerRoutes = (app: Application) => {

    app.use(json());

    for(let route of routes){
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        return res.send(new ResponseHandler(null, err));
    })

}