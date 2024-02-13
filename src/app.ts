import { envs } from "./config";
import { AuthRoutes } from "./presentation";
import { Server } from "./presentation/server"


(()=>{
    main()
})()

function main(){

    new Server({
        port: envs.PORT,
        router: AuthRoutes.router,
    })
        .start();

}