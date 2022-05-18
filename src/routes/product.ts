import { Router } from "express"
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductController,
  updateProductController
} from "../controllers/product-controllers"
import { checkJwt } from "../middlewares/checkJwt"

const routes = Router()
routes.post("/products", [checkJwt], createProductController)
routes.get("/products", [checkJwt], getAllProductsController)
routes.get("/products/:id", [checkJwt], getProductController)
routes.delete("/products/:id", [checkJwt], deleteProductController)
routes.put("/products/:id", [checkJwt], updateProductController)

export default routes
