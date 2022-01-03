import { Request, Response } from "express";
import { container } from "tsyringe";
import ListSpecificationServices from "../../services/ListSpecificationServices";


class ListSpecificationController {

    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationService = container.resolve(ListSpecificationServices)
        const specifications = await listSpecificationService.execute();
        return response.json(specifications);
    }

}

export default ListSpecificationController 