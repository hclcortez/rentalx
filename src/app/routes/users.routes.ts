import { Router } from "express";
import CreateUserController from "../controller/User/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/",createUserController.handle)

export default usersRoutes