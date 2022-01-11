import {container} from "tsyringe"
import { ICategoriesRepository } from "../../app/repositories/interfaces/ICategoriesRepository"
import { ISpecificationsRepository } from "../../app/repositories/interfaces/ISpecificationsRepository";
import CategoryRepository from "../../app/repositories/CategoriesRepository"
import SpecificationRepository from "../../app/repositories/SpecificationRepository";
import UsersRepository from "../../app/repositories/UsersRepository";
import { IUsersRepository } from "../../app/repositories/interfaces/IUsersRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoryRepository",CategoryRepository
);
container.registerSingleton<ISpecificationsRepository>(
    "SpecificationRepository",SpecificationRepository
);
container.registerSingleton<IUsersRepository>(
    "UsersRepository",UsersRepository
);