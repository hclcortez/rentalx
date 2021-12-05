import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import Category from "../model/Category";

import CategoryRepository from "../repositories/CategoriesRepository";
import CreateCategoryService from "../services/CreateCategoryService";

const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository();


categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoriesService = new CreateCategoryService(categoryRepository);
    createCategoriesService.execute({ name, description })
    return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {

    const categories = categoryRepository.list()

    return response.json(categories);
})

export { categoriesRoutes }