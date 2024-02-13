import { envs } from "./config";
import { Server } from "./presentation/server"
import { appRoute } from "./routes";


(()=>{
    main()
})()

function main(){

    new Server({
        port: envs.PORT,
        router: appRoute.router,
    })
        .start();

}