import { Router } from "express";
import { AuthRoutes } from "./presentation";


export class appRoute {

    static get router(): Router {

        const router = Router();

        //Rutas principales definidas
        router.use('/api', AuthRoutes.router );

        return router;
    }
}