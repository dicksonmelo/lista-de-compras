import { Router } from "express"
import { createListController } from "../controllers/product-controllers"

const routes = Router()
routes.post("/list", createListController)

export default routes
