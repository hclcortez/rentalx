import { Router } from 'express';
import categoriesRoutes from './categories.routes';
import specificationRoutes from './specifications.routes'
import usersRoutes from './users.routes';
import authenticateRoutes from './authenticante.routes';
import authenticated from "../middlewares/authenticated";

const routes = Router()

routes.use(authenticateRoutes)
routes.use(authenticated)
routes.use("/categories", categoriesRoutes)
routes.use("/specifications", specificationRoutes)
routes.use("/users", usersRoutes)

export default routes