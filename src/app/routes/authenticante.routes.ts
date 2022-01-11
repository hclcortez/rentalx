import {Router} from "express";
import AuthenticateUserController from "../controller/Authenticate/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/authenticate",authenticateUserController.handle)

export default authenticateRoutes;