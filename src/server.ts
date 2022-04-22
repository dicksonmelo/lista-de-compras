import "reflect-metadata"
import express from "express"
import AppDataSource from "./database/dataSource"
import { routes } from "./routes"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(routes)

AppDataSource.initialize()
app.listen(3000, () => console.log("Server is running"))
