import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import "reflect-metadata"
import routes from "./routes"
import { pool } from "./database/db"

dotenv.config()
const port = process.env.PORT
const app = express()

pool.on("connect", () => console.log("Connected to Database"))

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(routes)

pool.on("remove", () => {
  console.log("client removed")
  process.exit
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
