import "reflect-metadata";
import express, { request } from 'express';
import routes from './app/routes';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../config/swagger.json'

import "./database"
import "./shared/conteiner"
import { validate, ValidationError } from "express-validation";

const app = express()
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get("/", (request, response) => {
    return response.json({ message: "API" });
});
app.use(routes)
app.use((err, req, res, next) => {
    console.log('Erro')
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }
    return res.status(err.status || 500).json({ error: 'Internal Server Error' })
})


app.listen(3333, () => console.log('Server is running!'));