import { Specification } from "../../model/Specification";

interface ICreateSpecificationDTO {
    name: String;
    description: String;
}

interface ISpecificationsRepository {

    findByName(name: String): Promise<Specification>;
    list(): Promise<Specification[]>;
    create({name, description}: ICreateSpecificationDTO): Promise<void>;

}

export { ISpecificationsRepository, ICreateSpecificationDTO }