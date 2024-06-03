import { Router } from '../../deps.ts';
import AuthController from '../controllers/auth.controller.ts';

const authRouter = new Router();

authRouter.get(
  '/api/auth/test',
  AuthController.test,
);

authRouter.post(
  '/api/auth/login',
  AuthController.login,
);

export default authRouter;