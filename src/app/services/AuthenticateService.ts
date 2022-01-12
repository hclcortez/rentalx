import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";


interface IRequest {
    email: string,
    password: string;
}

interface IReseponse {
    token: string,
    user: {
        name: string,
        email: string
    }
}

@injectable()
class AuthenticateService {

    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IReseponse> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error("E-mail or password incorrect!..")
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("E-mail or password incorrect!!")
        }

        const token = sign({}, "hashExemple", {
            subject: user.id,
            expiresIn: "1d"
        });

        const userLogged: IReseponse = {
            token,
            user: {
                name:user.name,
                email: user.email
            }
        }
        return userLogged;

    }

}

export default AuthenticateService