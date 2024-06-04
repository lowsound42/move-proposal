import { ICollisionLookup } from "./ICollisionLookup.ts";
import { ICollisionServices } from "../services/ICollisionServices.ts";
import { GetCollisionDTO } from "./Responses/GetCollisionDTO.ts";

export default class CollisionLookup implements ICollisionLookup {

    private collisionService: ICollisionServices;

    constructor(injectedCollisionService: ICollisionServices) {
        this.collisionService = injectedCollisionService;
    }

    getAllCollisions() {
        return this.collisionService.getCollisions();
    }

    getOneCollision(id: number): GetCollisionDTO {
        return this.collisionService.getOneCollision(id);
    }
}