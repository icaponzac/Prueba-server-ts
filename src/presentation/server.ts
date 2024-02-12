import express from 'express';

interface Options {
    port?: number;
}

export class Server {

    public readonly app = express();

    private readonly port: number;

    //ID
    constructor( options: Options ){
        const { port = 5001 } = options;

        this.port = port;
    }

    async start(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}