import { CollisionDTO } from "./Responses/CollisionDTO.ts";

export interface ICollisionLookup {
    getAllCollisions(): CollisionDTO[]; 
    getOneCollision(id: number): CollisionDTO;
}