import { Router } from "express";
import  multer  from "multer"
import uploadConfig from "../../config/upload";

import CreateUserController from "../controller/User/CreateUserController";
import UpdateUserAvatarController from "../controller/User/UpdateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post("/",createUserController.handle)
usersRoutes.patch("/avatar",uploadAvatar.single("avatar"), updateUserAvatarController.handle)

export default usersRoutes