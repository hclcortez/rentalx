import { container, inject, injectable } from "tsyringe";
import Category from "../model/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

@injectable()
class ListCategoryService {

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoriesRepository
    ) { }

    async execute(): Promise<Category[]> {
        const categories = await this.categoryRepository.list();
        return categories;
    }


}

export default ListCategoryService