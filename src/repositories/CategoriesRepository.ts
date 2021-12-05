import Category from "../model/Category"
import { ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoryRepository {

    private categories: Category[];

    constructor() {
        this.categories = []
    }

    findByName(name: String): Category {
        const category = this.categories.find(category => category.name === name);
        return category;
    }

    list(): Category[] {
        return this.categories;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        })

        this.categories.push(category)
    }
}

export default CategoryRepository