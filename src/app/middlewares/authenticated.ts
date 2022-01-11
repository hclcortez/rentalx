import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import AppErro from "../Erros/AppErro";
import UsersRepository from "../repositories/UsersRepository";

interface IPayload {
    sub: string
}

export default async (request: Request, respose: Response, next: NextFunction) => {
    const authheader = request.headers.authorization;

    if (!authheader) {
        throw new AppErro("User does not exists!", 401)
    }

    const [, toke] = authheader.split(" ");

    try {
        const { sub: user_id } = verify(toke, "hashExemple") as IPayload;
        const userRepository = new UsersRepository();
        const user = await userRepository.findById(user_id)
        if(!user){
            throw new AppErro("User does not exists!", 401)
        }
        next();

    } catch {
        throw new AppErro("Invalid token.",401)
    }
 
}