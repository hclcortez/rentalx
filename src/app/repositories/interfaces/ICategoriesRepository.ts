import Category from "../../model/Category";

interface ICreateCategoryDTO {
    name: String;
    description: String
}

interface ICategoriesRepository {
    findByName(name: String): Promise<Category>;
    list(): Promise<Category[]>;
    create({name, description}: ICreateCategoryDTO): Promise<void>;
}

export {ICategoriesRepository, ICreateCategoryDTO}