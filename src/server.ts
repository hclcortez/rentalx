import express, { request } from 'express'; 
import routes from './app/routes';



const app = express()
app.use(express.json())


app.get("/", (request, response) => {
    return response.json({ message: "API" });
});
app.use(routes)


app.listen(3000, () => console.log('Server is running!'));