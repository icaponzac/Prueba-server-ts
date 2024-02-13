import { Router } from "express";
import { AuthRoutes } from "./presentation/auth/routes";


export class appRoute {

    static get router(): Router {

        const router = Router();

        //Rutas principales definidas
        router.use('/api/auth', AuthRoutes.router )

        return router;
    }
}