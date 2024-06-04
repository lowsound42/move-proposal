import { Application } from './deps.ts';
import reporterRouter from './web/routers/reporterRouter.ts';

const port = 8200;
const app = new Application();

reporterRouter.init(app);

app.addEventListener('listen', () => {
  console.log(`Ahoy matey, you be sailin' on port:${port}`);
});

await app.listen({ port });