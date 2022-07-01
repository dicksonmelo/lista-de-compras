import { Router } from "express"
import product from "./product"

const routes = Router()

routes.use("/api", product)

export default routes
