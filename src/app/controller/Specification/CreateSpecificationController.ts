import { Request, Response } from "express";
import { CreateSpecificationService } from "../../services/CreateSpecificationService";

class CreateSpecificationController {
    constructor(private createService: CreateSpecificationService) { }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createService.execute({ name, description });
        return response.status(201).send();
    }
}

export { CreateSpecificationController }