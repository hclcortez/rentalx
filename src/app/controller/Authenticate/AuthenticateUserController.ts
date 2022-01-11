import { Request, Response } from "express";
import { container } from "tsyringe";
import AuthenticateService from "../../services/AuthenticateService";

class AuthenticateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        console.log("Passou aqui")
        const { password, email } = request.body;

        const authenticateService = container.resolve(AuthenticateService);
        const _token = await authenticateService.execute({ password, email });
        return response.json(_token) 
    }  

}

export default AuthenticateUserController