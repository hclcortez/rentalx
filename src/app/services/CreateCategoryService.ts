import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository"

interface IRequest {
    name: String;
    description: String;
}

class CreateCategoryService {

    constructor(private categoriesReporitory: ICategoriesRepository) { }

    async execute({ name, description }: IRequest): Promise<void> {
        console.log("Category Service")
        const categoryAlreadyExists = await this.categoriesReporitory.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!")
        }

        this.categoriesReporitory.create({ name, description })
    }
}

export default CreateCategoryService