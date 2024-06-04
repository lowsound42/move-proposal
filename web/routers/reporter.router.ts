import { Router } from '../../deps.ts';

const reporter = new Router();

reporter.get(
    '/',
    (ctx) => {
        ctx.response.body = "imagine this is like a reporter and stuff";
    }
);

export default reporter;