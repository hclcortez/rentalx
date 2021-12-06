import { Request, Response } from "express";
import CategoryRepository from "../../repositories/CategoriesRepository";
import CreateCategoryService from "../../services/CreateCategoryService"; 

class ListCategoryController {
    constructor(private categoryRepository: CategoryRepository) { }

    handle(request: Request, response: Response): Response {
        const categories = this.categoryRepository.list();
        return response.json(categories);
    }
}

export { ListCategoryController }