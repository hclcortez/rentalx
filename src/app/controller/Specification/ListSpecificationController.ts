import { Request, Response } from "express";
import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";

class ListSpecificationController {

    constructor(private specificationRepository: SpecificationsRepository) { }

    handle(request: Request, response: Response): Response {
        const specifications = this.specificationRepository.list();
        return response.json(specifications);
    }

}

export { ListSpecificationController }