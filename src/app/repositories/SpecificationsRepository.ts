import { Specification } from "../model/Specification"
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./interfaces/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{

    private specifications: Specification[];

    constructor(){
        this.specifications = [];
    }

    findByName(name: String): Specification {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }

    list(): Specification[] {
        return this.specifications;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification()
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        })

        this.specifications.push(specification)
    }

}

export { SpecificationsRepository }