import { Router } from '../../deps.ts';
import { collisionController } from '../../dependencyInjection/index.ts'

const collisionRouter = new Router();

collisionRouter.get(
    '/api/collisions',
    collisionController.getCollisions,
);

export default collisionRouter;