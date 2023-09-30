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
import noteRegisterDTO from "../dto/note-register.dto.js";
import noteRegisterController from "../controllers/note-register.controller.js";
import noteAccessController from "../controllers/note-access.controller.js";
import noteDeleteDTO from "../dto/note-delete.dto.js";
import noteDeleteController from "../controllers/note-delete.controller.js";

const userRouter = Router();

userRouter.post('/sign-up', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDTO, userPorfileController);
userRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController);
userRouter.patch('/change-pwd', userJWTDTO, userChangePwdDTO, userChangePwdController);
userRouter.post('/note-register', userJWTDTO, noteRegisterDTO, noteRegisterController);
userRouter.get('/note-access', userJWTDTO, noteAccessController);
userRouter.delete('/note-delete', userJWTDTO, noteDeleteDTO, noteDeleteController);

export default userRouter;