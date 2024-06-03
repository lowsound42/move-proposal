import { ICollisionLookup } from "../../core/MOVE/collision/ICollisionLookup.ts";
import { RouterContext} from "../../deps.ts";

class CollisionController {
    lookup: ICollisionLookup;
    constructor(public injectableLookup: ICollisionLookup) {
      this.lookup = injectableLookup;
    }

    public getCollisions = (
      { response }: RouterContext<string>,
    ): void => {
      response.body = this.lookup.getAllCollisions();
    }
  
  }

  export default CollisionController;