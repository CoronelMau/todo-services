import { Router } from "express";
import userRegisterDTO from "../dto/user-register.dto";
import userLoginDTO from "../dto/user-login.dto";
import userJWTDTO from "../dto/user-jwt.dto";
import userUpdateDataDTO from "../dto/user-update_data.dto";
import userChangePwdDTO from "../dto/user-change_pwd.dto";

const userRouter = Router();

userRouter.post('/sign-up', userRegisterDTO);
userRouter.post('/login', userLoginDTO);
userRouter.get('/profile', userJWTDTO);
userRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO);
userRouter.patch('/change-pwd', userJWTDTO, userChangePwdDTO);

export default userRouter;