import express, { Router } from 'express';

interface Options {
    port?: number;
    router: Router;
}

export class Server {

    public readonly app = express();

    private readonly port: number;
    private readonly router: Router;

    //ID
    constructor( options: Options ){
        const { port = 5001, router } = options;

        this.port = port;
        this.router = router;
    }

    async start(){

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }))

        this.app.use(this.router);

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}