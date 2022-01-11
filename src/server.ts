import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors"
import routes from './app/routes';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../config/swagger.json'

import "./database"
import "./shared/conteiner"
import AppErro from "./app/Erros/AppErro";

const app = express()
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get("/", (request, response) => {
    return response.json({ message: "API" });
});
app.use(routes)
app.use((err:Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppErro) {
        return response.status(err.statuscode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: 'error',
        message:`Internal server error - ${err.message}`
    })
})


app.listen(3333, () => console.log('Server is running!'));