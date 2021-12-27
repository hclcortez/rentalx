import { getRepository, Repository } from "typeorm";
import Category from "../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "./interfaces/ICategoriesRepository";

class CategoryRepository implements ICategoriesRepository {
  
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async findByName(name: String): Promise<Category> {
        const category = await this.repository.findOne({ name })
        return category;
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name
        })

        await this.repository.save(category);
    }
}

export default CategoryRepository