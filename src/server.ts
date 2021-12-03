import express, { request } from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express()
app.use(express.json())


app.get("/", (request, response) => {
    return response.json({ message: "API" });
});

app.use("/categories",categoriesRoutes)

app.post("/course", (request, response) => {
    const { name } = request.body
    return response.json({ name })
})

app.listen(3000, () => console.log('Server is running!'));