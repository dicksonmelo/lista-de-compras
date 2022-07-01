import { Router } from "express"
import product from "./list"

const routes = Router()

routes.use("/api", product)

export default routes
