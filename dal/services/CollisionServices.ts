import { Collision } from "../../core/MOVE/collision/Collision.ts";
import { ICollisionServices } from "../../core/MOVE/services/ICollisionServices.ts";
import { mapResponseToDTO } from "../../core/mapper.ts";
import { CollisionDTO } from "../../core/MOVE/collision/Responses/CollisionDTO.ts";


export class CollisionServices implements ICollisionServices {
  db: Collision[];

  constructor(injectedDb: Collision[]) {
    this.db = injectedDb;
  }
    public getCollisions =  (
      ): CollisionDTO[] => {
        const collisionResponse = this.db.map(element => mapResponseToDTO<CollisionDTO, Collision>(element, {
          id: "id",
          ksi: "ksi",
          location: "location",
          modifiedBy: "modifiedBy",
          modifiedDatetime: "modifiedDatetime"
        }));
        return collisionResponse;
      }
}