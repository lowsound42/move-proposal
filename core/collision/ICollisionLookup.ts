import { GetCollisionDTO } from "./Responses/GetCollisionDTO.ts";

export interface ICollisionLookup {
    getAllCollisions(): GetCollisionDTO[]; 
}