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
        const user = await this.repository.findOne({email});
        return user;
    }

    async create({
        name,
        email,
        driver_license,
        password,
        avatar,
        id
    }: ICreateUserTDO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
            driver_license,
            avatar,
            id
        })

        await this.repository.save(user);
    }

}

export default UsersRepository