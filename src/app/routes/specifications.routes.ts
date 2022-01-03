import { request, response, Router } from "express";

import  ListSpecificationController  from "../controller/Specification/ListSpecificationController";
import  CreateSpecificationController  from "../controller/Specification/CreateSpecificationController";

const listSpecificationController = new ListSpecificationController();
const createSpecificationController = new CreateSpecificationController();

const specificationRoutes = Router();

specificationRoutes.get("/", listSpecificationController.handle);

specificationRoutes.post("/", createSpecificationController.handle)

export { specificationRoutes }