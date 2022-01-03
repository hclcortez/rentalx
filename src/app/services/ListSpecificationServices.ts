import { inject, injectable } from "tsyringe";
import Specification from "../model/Specification";
import { ISpecificationsRepository } from "../repositories/interfaces/ISpecificationsRepository";


@injectable()
class ListSpecificationServices {

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationsRepository
    ){}

    async execute(): Promise<Specification[]>{
        const specifications = await this.specificationRepository.list();
        return specifications;
    }

}

export default ListSpecificationServices