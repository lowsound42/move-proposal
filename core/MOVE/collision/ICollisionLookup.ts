import { GetCollisionDTO } from "./Responses/GetCollisionDTO.ts";

export interface ICollisionLookup {
    getAllCollisions(): GetCollisionDTO[]; 
    getOneCOllision(id: number): GetCollisionDTO;
}