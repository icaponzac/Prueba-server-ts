import express from 'express';


export class Server {

    public readonly app = express();

    //ID
    constructor(){}

    async start(){
        this.app.listen(5001, () => {
            console.log(`Server running on port ${5001}`)
        })
    }
}