import { CollisionDTO } from "../collision/Responses/CollisionDTO.ts";

export interface ICollisionServices {
    getCollisions(): CollisionDTO[]
}