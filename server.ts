import { Application } from './deps.ts';
import router from './web/routers/index.ts';

const port = 8000;
const app = new Application();

router.init(app);

app.addEventListener('listen', () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port });