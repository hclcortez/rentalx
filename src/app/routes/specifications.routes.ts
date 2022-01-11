import { request, response, Router } from "express";

import  ListSpecificationController  from "../controller/Specification/ListSpecificationController";
import  CreateSpecificationController  from "../controller/Specification/CreateSpecificationController";
import authenticated from "../middlewares/authenticated";

const listSpecificationController = new ListSpecificationController();
const createSpecificationController = new CreateSpecificationController();

const specificationRoutes = Router();

specificationRoutes.use(authenticated)
specificationRoutes.get("/", listSpecificationController.handle);
specificationRoutes.post("/", createSpecificationController.handle)

export default specificationRoutes 