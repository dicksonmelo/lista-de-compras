import "reflect-metadata"
import express from "express"
import AppDataSource from "./database/dataSource"
import routes from "./routes"
import cors from "cors"
import helmet from "helmet"
import bodyParser from "body-parser"

const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(routes)

AppDataSource.initialize()
app.listen(3000, () => console.log("Server is running"))
