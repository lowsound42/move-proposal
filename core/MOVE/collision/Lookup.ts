import { ICollisionLookup } from "./ICollisionLookup.ts";
import { ICollisionServices } from "../services/ICollisionServices.ts";
import { CollisionDTO } from "./Responses/CollisionDTO.ts";

export default class CollisionLookup implements ICollisionLookup {

    private collisionService: ICollisionServices;

    constructor(injectedCollisionService: ICollisionServices) {
        this.collisionService = injectedCollisionService;
    }

    getAllCollisions() {
        return this.collisionService.getCollisions();
    }

    getOneCollision(id: number): CollisionDTO {
        return this.collisionService.getOneCollision(id);
    }
}