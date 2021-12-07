import { Request, Response } from "express";
import { ImportCategory } from "../../services/ImportCategory";

class ImportCategoryController {

    constructor(private importeCategory: ImportCategory){}

    handle(request: Request, response: Response): Response {
        const {file} = request
        this.importeCategory.execute(file);
        return response.send();
    }
}

export { ImportCategoryController }