import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import { createCategoryController, listCategoryController } from "../controller/Category";



const categoriesRoutes = Router()

categoriesRoutes.post("/", (request, response) => {
    createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
    listCategoryController.handle(request, response);
})

export { categoriesRoutes }