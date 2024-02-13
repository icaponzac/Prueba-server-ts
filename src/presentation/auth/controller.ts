import { Request, Response } from "express";


export class AuthController {

    constructor(){}

    userRegister = (req: Request, res: Response ) => {

        res.json('Hello desde Register')

    }
    
    userLogin = (req: Request, res: Response ) => {

        res.json('Hello desde login')

    }
}