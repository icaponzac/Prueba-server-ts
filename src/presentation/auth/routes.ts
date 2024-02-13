import { Router } from "express";
import { Request, Response } from "express";


export class AuthRoutes {

    static get router(): Router {

        const router = Router();

        router.get('/register', (req: Request, res: Response ) => {
            res.json('Hello world desde Router');
        })

        return router;
    }
}