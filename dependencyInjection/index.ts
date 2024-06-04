// import CollisionController from "../web/controllers/collision.controller.ts";
// import MockCollisionsLookup from '../core/MOVE/collision/MockCollisionsLookup.ts';
// const collisionLookup = new MockCollisionsLookup();
// const collisionController = new CollisionController(collisionLookup);
// export {
//     collisionController
// }



import { testCollisions } from "../dal/db/mockDb.ts";
import CollisionController from "../web/controllers/collision.controller.ts";
import CollisionLookup from '../core/MOVE/collision/Lookup.ts';
import { CollisionServices } from "../dal/services/CollisionServices.ts"

const collisionServices = new CollisionServices(testCollisions);

const collisionLookup = new CollisionLookup(collisionServices);

const collisionController = new CollisionController(collisionLookup);

export {
    collisionController
}