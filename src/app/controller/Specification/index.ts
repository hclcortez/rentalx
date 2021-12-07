import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../../services/CreateSpecificationService";
import { ListCategoryController } from "../Category/ListCategoryController";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { ListSpecificationController } from "./ListSpecificationController";


const createSpecificationService = new CreateSpecificationService(SpecificationsRepository.getInstance());
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

const listSpecificationController = new ListSpecificationController(SpecificationsRepository.getInstance());

export { createSpecificationController, listSpecificationController }
