import CategoryRepository from "../../repositories/CategoriesRepository";
import CreateCategoryService from "../../services/CreateCategoryService";
import { ImportCategory } from "../../services/ImportCategory";
import { CreateCategoryController } from "./CreateCategoryController";
import { ImportCategoryController } from "./ImportCategoryController";
import { ListCategoryController } from "./ListCategoryController";

const createCategoryController = () => {
    const categoryRepository = new CategoryRepository()
    const createCategoryService = new CreateCategoryService(categoryRepository);
    const createCategoryController = new CreateCategoryController(createCategoryService);
    return createCategoryController;
}




//const listCategoryController = new ListCategoryController(CategoryRepository.getInstance())

//const importeCategory = new ImportCategory(CategoryRepository.getInstance())
//const importeCategoryController = new ImportCategoryController(importeCategory);

// listCategoryController
// createCategoryController
// importeCategoryController

export { createCategoryController };
