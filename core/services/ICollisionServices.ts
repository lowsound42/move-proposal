import { GetCollisionDTO } from "../collision/Responses/GetCollisionDTO.ts";

export interface ICollisionServices {
    getCollisions(): GetCollisionDTO[]
}