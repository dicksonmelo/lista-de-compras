import { Router } from "express"
import { createListController } from "../controllers/product-controllers"
import { checkJwt } from "../middlewares/checkJwt"

const routes = Router()
routes.post("/list", [checkJwt], createListController)

export default routes
