import { Router } from 'express';
import categoriesRoutes from './categories.routes';
import specificationRoutes from './specifications.routes'
import usersRoutes from './users.routes';
import authenticateRoutes from './authenticante.routes';

const routes = Router()

routes.use("/categories", categoriesRoutes)
routes.use("/specifications", specificationRoutes)
routes.use("/users", usersRoutes)
routes.use(authenticateRoutes)

export default routes