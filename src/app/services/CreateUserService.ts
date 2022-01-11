import { inject, injectable } from "tsyringe";
import { ICreateUserTDO, IUsersRepository } from "../repositories/interfaces/IUsersRepository";
import { hash } from "bcrypt";

@injectable()
class CreateUserService {

    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute({
        name,
        email,
        password,
        driver_license
    }): Promise<void> {

        const userAlreadyExist = await this.userRepository.findByEmail(email);

        if(userAlreadyExist){
            throw new Error("user already exists!")
        }

        const passwordHash = await hash(password, 8);

        this.userRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license
        });
    }

}

export default CreateUserService