import { getRepository, Repository } from "typeorm";
import  Specification  from "../model/Specification"
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./interfaces/ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {

    private repository: Repository<Specification>

    constructor() {
        this.repository = getRepository(Specification);
    }

    async findByName(name: String): Promise<Specification> {
        const specification = await this.repository.findOne({ name });
        return specification;
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        })

        await this.repository.save(specification);
    }

}

export default SpecificationRepository 