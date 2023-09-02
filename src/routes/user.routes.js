import { Router } from "express";
import userRegisterDTO from "../dto/user-register.dto.js";
import userLoginDTO from "../dto/user-login.dto.js";
import userJWTDTO from "../dto/user-jwt.dto.js";
import userUpdateDataDTO from "../dto/user-update_data.dto.js";
import userChangePwdDTO from "../dto/user-change_pwd.dto.js";
import userRegisterController from "../controllers/user-register.controller.js";
import userLoginController from "../controllers/user-login.controller.js";
import userPorfileController from "../controllers/user-profile.controller.js";
import userUpdateDataController from "../controllers/user-update_data.controller.js";
import userChangePwdController from "../controllers/user-change_pwd.controller.js";

const userRouter = Router();

userRouter.post('/sign-up', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDTO, userPorfileController);
userRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController);
userRouter.patch('/change-pwd', userJWTDTO, userChangePwdDTO, userChangePwdController);

export default userRouter;