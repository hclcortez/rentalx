import { Specification } from "../../model/Specification";

interface ICreateSpecificationDTO {
    name: String;
    description: String;
}

interface ISpecificationsRepository {

    findByName(name: String): Specification;
    list(): Specification[];
    create({name, description}: ICreateSpecificationDTO): void;

}

export { ISpecificationsRepository, ICreateSpecificationDTO }