import { ISpecificationsRepository } from "../repositories/interfaces/ISpecificationsRepository";
import { inject, injectable } from "tsyringe"

interface IRequest {
    name: String;
    description: String;
}

@injectable()
class CreateSpecificationService {

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationsRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationRepository.findByName(name)

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }

        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationService }