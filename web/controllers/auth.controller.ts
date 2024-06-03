import { RouterContext} from "../../deps.ts";

class AuthController {
    public static async login(
      { request, response }: RouterContext<string>,
    ): Promise<void> {

      const body = await request.body.json();
      body.error = false;
      response.body = body;
    }

    public static test(
      { response }: RouterContext<string>,
    ): void {
      response.body = 'test';
    }
  
  }

  export default AuthController;