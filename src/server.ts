import bodyParser from "body-parser"
import cors from "cors"
import express, { NextFunction } from "express"
import helmet from "helmet"
import "reflect-metadata"
import AppDataSource from "./database/dataSource"
import routes from "./routes"

const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(routes)

AppDataSource.initialize()
app.listen(3000, () => console.log("Server is running"))
