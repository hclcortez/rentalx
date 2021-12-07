import CategoryRepository from "../../repositories/CategoriesRepository";
import CreateCategoryService from "../../services/CreateCategoryService";
import { ImportCategory } from "../../services/ImportCategory";
import { CreateCategoryController } from "./CreateCategoryController";
import { ImportCategoryController } from "./ImportCategoryController";
import { ListCategoryController } from "./ListCategoryController";


const createCategoryService = new CreateCategoryService(CategoryRepository.getInstance());
const createCategoryController = new CreateCategoryController(createCategoryService);


const listCategoryController = new ListCategoryController(CategoryRepository.getInstance())

const importeCategory = new ImportCategory(CategoryRepository.getInstance())
const importeCategoryController = new ImportCategoryController(importeCategory);

export { listCategoryController, createCategoryController, importeCategoryController };
