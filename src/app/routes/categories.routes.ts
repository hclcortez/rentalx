import { request, response, Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import { createCategoryController } from "../controller/Category";
import multer from "multer";

const upload = multer({
    dest: "./tmp"
});

const categoriesRoutes = Router()

categoriesRoutes.post("/", (request, response) => {
    console.log('Categories Route')
    createCategoryController().handle(request, response)
})

// categoriesRoutes.get("/", (request, response) => {
//     listCategoryController.handle(request, response);
// })

// categoriesRoutes.post("/import",upload.single("file"),(request, response) => {
//     importeCategoryController.handle(request, response);
// })

export { categoriesRoutes }