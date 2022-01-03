import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository"
import { inject, injectable } from "tsyringe"

interface IRequest {
    name: String;
    description: String;
}

@injectable()
class CreateCategoryService {

    constructor(
        @inject("CategoryRepository")
        private categoriesReporitory: ICategoriesRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesReporitory.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!")
        }

        this.categoriesReporitory.create({ name, description })
    }
}

export default CreateCategoryService