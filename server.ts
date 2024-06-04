import { Application } from './deps.ts';
import router from './web/routers/index.ts';

const port = 8000;
const app = new Application();

router.init(app);

app.addEventListener('listen', () => {
  console.log(`Ahoy matey, you be sailin' on port:${port}`);
});

await app.listen({ port });