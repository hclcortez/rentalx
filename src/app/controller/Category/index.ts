import CategoryRepository from "../../repositories/CategoriesRepository";
import CreateCategoryService from "../../services/CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";
import { ListCategoryController } from "./ListCategoryController";


const createCategoryService = new CreateCategoryService(CategoryRepository.getInstance());
const createCategoryController = new CreateCategoryController(createCategoryService);


const listCategoryController = new ListCategoryController(CategoryRepository.getInstance())

export {  listCategoryController,createCategoryController };
