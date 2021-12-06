import { Router } from "express";
import { SpecificationsRepository } from "../repositories/SpecificationsRepository"; 
import { CreateSpecificationService } from "../services/CreateSpecificationService"; 

const specificationRoutes = Router();
const specificationReposytory = new SpecificationsRepository();

specificationRoutes.get("/", (request, response) => {
    const specifications = specificationReposytory.list();
    return response.json(specifications);
});

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const specificationService = new CreateSpecificationService(specificationReposytory);
    specificationService.execute({ name, description });
    return response.status(201).send();
})

export { specificationRoutes }