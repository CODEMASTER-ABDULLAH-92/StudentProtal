import express from 'express'

import { LoginUser,RegisterUser,LogoutUser } from '../controllers/userController.js'


const userRouter = express.Router();

userRouter.post("/loginUser",LoginUser);
userRouter.post("/register",RegisterUser);
userRouter.post("/logout",LogoutUser)
export default userRouter;