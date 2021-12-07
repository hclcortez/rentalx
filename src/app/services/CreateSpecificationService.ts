import { ISpecificationsRepository } from "../repositories/interfaces/ISpecificationsRepository";

interface IRequest {
    name: String;
    description: String;
}

class CreateSpecificationService {

    constructor(private specificationRepository: ISpecificationsRepository) { }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(name)

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }

        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationService }