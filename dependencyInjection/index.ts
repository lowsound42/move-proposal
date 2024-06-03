// import CollisionController from "../web/controllers/collision.controller.ts";
// import MockCollisionsLookup from '../core/collision/MockCollisionsLookup.ts';
// const collisionLookup = new MockCollisionsLookup();
// const collisionController = new CollisionController(collisionLookup);
// export {
//     collisionController
// }

import { testCollisions } from "../dal/db/mockDb.ts";
import CollisionController from "../web/controllers/collision.controller.ts";
import CollisionLookup from '../core/MOVE/collision/Lookup.ts';
import { CollisionServices } from "../dal/services/CollisionServices.ts"
const collisionLookup = new CollisionLookup(new CollisionServices(testCollisions));
const collisionController = new CollisionController(collisionLookup);
export {
    collisionController
}