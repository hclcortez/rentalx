import express, { request } from 'express'; 
import routes from './app/routes';
import  swaggerUi  from 'swagger-ui-express';

import swaggerFile from '../config/swagger.json'


const app = express()
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get("/", (request, response) => {
    return response.json({ message: "API" });
});
app.use(routes)


app.listen(3000, () => console.log('Server is running!'));