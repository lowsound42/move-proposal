import { ICollisionLookup } from "./ICollisionLookup.ts";
import { Collision } from "./Collision.ts";

const collisionA = new Collision(1, 'yonge and bloor', false)
const collisionB = new Collision(2, 'spadina and college', false)
const testCollisions = [collisionA, collisionB];

export default class MockCollisionLookup implements ICollisionLookup {

    getAllCollisions() {
        return testCollisions;
    }
}