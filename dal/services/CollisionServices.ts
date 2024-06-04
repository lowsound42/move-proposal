import { Collision } from "../../core/MOVE/collision/Collision.ts";
import { ICollisionServices } from "../../core/MOVE/services/ICollisionServices.ts";
import { mapResponseToDTO } from "../../core/mapper.ts";
import { CollisionDTO } from "../../core/MOVE/collision/Responses/CollisionDTO.ts";
import { ILogger } from "../../shared/Logger/ILogger.ts";

export class CollisionServices implements ICollisionServices {
  db: Collision[];
  logger: ILogger;
  constructor(injectedDb: Collision[], injectedLogger: ILogger) {
    this.db = injectedDb;
    this.logger = injectedLogger;
  }
  public getCollisions = (): CollisionDTO[] => {
    this.logger.log("Yo ho ho!");
    const collisionResponse = this.db.map((element) =>
      mapResponseToDTO<CollisionDTO, Collision>(element, {
        id: "id",
        ksi: "ksi",
        location: "location",
        modifiedBy: "modifiedBy",
        modifiedDatetime: "modifiedDatetime",
      })
    );
    return collisionResponse;
  };

  public getOneCollision = (id: number): CollisionDTO => {
    const collisionToMap: Collision | undefined = this.db.find(
      (element) => element.id === id
    );
    let collisionResponse;
    if (collisionToMap !== undefined) {
      collisionResponse = mapResponseToDTO<CollisionDTO, Collision>(
        collisionToMap,
        {
          id: "id",
          ksi: "ksi",
          location: "location",
          modifiedBy: "modifiedBy",
          modifiedDatetime: "modifiedDatetime",
        }
      );
    }
    return collisionResponse!;
  };
}
