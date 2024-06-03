import { Collision } from "../../core/collision/Collision.ts";


const collisionA = new Collision(1, 'yonge and bloor', false)
const collisionB = new Collision(2, 'spadina and college', false)
const testCollisions = [collisionA, collisionB];

export {
    testCollisions
}