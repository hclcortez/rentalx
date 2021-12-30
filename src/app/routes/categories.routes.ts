import { request, response, Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import { CreateCategoryController } from "../controller/Category/CreateCategoryController";
import multer from "multer";
import { CreateSpecificationController } from "../controller/Specification/CreateSpecificationController";

const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController()
const categoriesRoutes = Router()

categoriesRoutes.post("/", (request, response) => {
    createCategoryController.handle(request, response)
})

// categoriesRoutes.get("/", (request, response) => {
//     listCategoryController.handle(request, response);
// })

// categoriesRoutes.post("/import",upload.single("file"),(request, response) => {
//     importeCategoryController.handle(request, response);
// })

export { categoriesRoutes }