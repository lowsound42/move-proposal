import { Router } from '../../deps.ts';

const defaultRouter = new Router();

defaultRouter.get(
    '/',
    (ctx) => {
        ctx.response.body = "imagine this is like a map and stuff";
    }
);

export default defaultRouter;