import { Router } from "express";
import { AuthController } from "./controller";


export class AuthRoutes {

    static get router(): Router {

        const router = Router();

        const controller = new AuthController();

        router.post('/register', controller.userRegister );
        router.post('/login', controller.userLogin );

        return router;
    }
}