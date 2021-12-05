import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import Category from "../model/Category";

import CategoryRepository from "../repositories/CategoryRepository";

const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository();


categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoryRepository.findByName(name)

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category alredy exists!" })
    }

    categoryRepository.create({ name, description })

    return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {

    const categories = categoryRepository.list()

    return response.json(categories);
})

export { categoriesRoutes }