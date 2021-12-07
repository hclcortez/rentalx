import Category from "../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "./interfaces/ICategoriesRepository";

class CategoryRepository implements ICategoriesRepository{

    private static instance: CategoryRepository;
    private categories: Category[];

    private constructor() {
        this.categories = []
    }

    public static getInstance():CategoryRepository{
        if(!CategoryRepository.instance){
            CategoryRepository.instance = new CategoryRepository();
        }
        return CategoryRepository.instance;
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