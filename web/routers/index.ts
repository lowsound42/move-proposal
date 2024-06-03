import { Application } from "../../deps.ts";
import collisionRouter from "./collision.router.ts";
import authRouter from "./auth.router.ts";

const init = (app: Application) => {
    app.use(collisionRouter.routes());
    app.use(authRouter.routes());

    app.use(collisionRouter.allowedMethods());
    app.use(authRouter.allowedMethods());

}

export default {
    init
}