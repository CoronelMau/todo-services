import { Router } from "express";
import userRegisterDTO from "../dto/user-register.dto";
import userLoginDTO from "../dto/user-login.dto";
import userJWTDTO from "../dto/user-jwt.dto";
import userUpdateDataDTO from "../dto/user-update_data.dto";
import userChangePwdDTO from "../dto/user-change_pwd.dto";
import userRegisterController from "../controllers/user-register.controller";
import userLoginController from "../controllers/user-login.controller";
import userPorfileController from "../controllers/user-profile.controller";
import userUpdateDataController from "../controllers/user-update_data.controller";
import userChangePwdController from "../controllers/user-change_pwd.controller";

const userRouter = Router();

userRouter.post('/sign-up', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDTO, userPorfileController);
userRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController);
userRouter.patch('/change-pwd', userJWTDTO, userChangePwdDTO, userChangePwdController);

export default userRouter;