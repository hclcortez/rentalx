import {container} from "tsyringe"
import CategoryRepository from "../../app/repositories/CategoriesRepository"
import { ICategoriesRepository } from "../../app/repositories/interfaces/ICategoriesRepository"


container.registerSingleton<ICategoriesRepository>(
    "CategoryRepository",CategoryRepository
);