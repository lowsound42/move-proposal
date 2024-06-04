import { Collision } from "../../core/MOVE/collision/Collision.ts";
import { ICollisionServices } from "../../core/MOVE/services/ICollisionServices.ts";
import { mapResponseToDTO } from "../../core/mapper.ts";
import { GetCollisionDTO } from "../../core/MOVE/collision/Responses/GetCollisionDTO.ts";


export class CollisionServices implements ICollisionServices {
  db: Collision[];

  constructor(injectedDb: Collision[]) {
    this.db = injectedDb;
  }
    public getCollisions =  (
      ): GetCollisionDTO[] => {
        const collisionResponse = this.db.map(element => mapResponseToDTO<GetCollisionDTO, Collision>(element, {
          id: "id",
          ksi: "ksi",
          location: "location",
          modifiedBy: "modifiedBy",
          modifiedDatetime: "modifiedDatetime"
        }));
        return collisionResponse;
      }
  
      public getOneCollision =  (
        id:number
      ): GetCollisionDTO => {
        const collisionToMap: Collision | undefined = this.db.find(element => element.id === id);
        let collisionResponse;
        if(collisionToMap !== undefined){
          collisionResponse = mapResponseToDTO<GetCollisionDTO, Collision>(collisionToMap, {
            id: "id",
            ksi: "ksi",
            location: "location",
            modifiedBy: "modifiedBy",
            modifiedDatetime: "modifiedDatetime"
          })
        }
        return collisionResponse;
      }
    
}