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

    getOneCOllision(id: number): GetCollisionDTO {
        return this.collisionService.getOneCollision(id);
    }
}