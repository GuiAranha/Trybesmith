import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();

const productsController = new UserController();

userRouter.post('/', productsController.createUser);

export default userRouter;