import { Application } from "../../deps.ts";
import reporter from "./reporter.router.ts";


const init = (app: Application) => {
    app.use(reporter.routes());

    app.use(reporter.allowedMethods());
}

export default {
    init
}