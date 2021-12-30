import { Request, Response } from "express";
import CreateCategoryService from "../../services/CreateCategoryService";
import { container } from "tsyringe"

class CreateCategoryController {

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        const createCategoryService = container.resolve(CreateCategoryService) 
        createCategoryService.execute({ name, description })
        return response.status(201).send();
    }

}

export { CreateCategoryController }