import { request, response, Router } from "express";
import multer from "multer";
import { container } from "tsyringe";

import  CreateCategoryController  from "../controller/Category/CreateCategoryController";
import  ListCategoryController  from "../controller/Category/ListCategoryController";

const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()

const categoriesRoutes = Router()

categoriesRoutes.post("/", createCategoryController.handle)
categoriesRoutes.get("/", listCategoryController.handle)

// categoriesRoutes.post("/import",upload.single("file"),(request, response) => {
//     importeCategoryController.handle(request, response);
// })

export { categoriesRoutes }