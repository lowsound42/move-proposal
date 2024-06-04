import { Router } from '../../deps.ts';
import { collisionController } from '../../dependencyInjection/index.ts'

const collisionRouter = new Router();

collisionRouter.get(
    '/api/collisions',
    collisionController.getCollisions,
);

collisionRouter.get(
    '/api/collisions/:id',
    collisionController.getOneCollision,
  );

export default collisionRouter;