import { Collision } from "../../core/MOVE/collision/Collision.ts";
import { ICollisionServices } from "../../core/MOVE/services/ICollisionServices.ts";
import { testCollisions } from "../db/mockDb.ts";
import { mapResponseToDTO } from "../../core/mapper.ts";
import { GetCollisionDTO } from "../../core/MOVE/collision/Responses/GetCollisionDTO.ts";

const collisionResponse = testCollisions.map(element => mapResponseToDTO<GetCollisionDTO, Collision>(element, {
  id: "id",
  ksi: "ksi",
  location: "location",
  modifiedBy: "modifiedBy",
  modifiedDatetime: "modifiedDatetime"
}));

export class CollisionServices implements ICollisionServices {
    public getCollisions =  (
      ): GetCollisionDTO[] => {
        return collisionResponse;
      }
}