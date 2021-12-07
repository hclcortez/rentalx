import { request, response, Router } from "express";
import { createSpecificationController, listSpecificationController } from "../controller/Specification";

const specificationRoutes = Router();

specificationRoutes.get("/", (request, response) => {
    listSpecificationController.handle(request, response);
});

specificationRoutes.post("/", (request, response) => {
    createSpecificationController.handle(request, response);
})

export { specificationRoutes }