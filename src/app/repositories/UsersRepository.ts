import { getRepository, Repository } from "typeorm";
import User from "../model/User";
import { ICreateUserTDO, IUsersRepository } from "./interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>
    
    constructor() {
        this.repository = getRepository(User);
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne(email);
        return user;
    }

    async create(data: ICreateUserTDO): Promise<void> {
        const user = this.repository.create({
            name: data.name,
            email: data.email,
            password: data.password,
            driver_license: data.driver_license
        })

        await this.repository.save(user);
    }

}

export default UsersRepository