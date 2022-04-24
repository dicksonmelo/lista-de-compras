import { Router } from "express"
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductController,
  updateProductController,
} from "./controllers/product-controllers"

const routes = Router()

routes.post("/products", createProductController)
routes.get("/products", getAllProductsController)
routes.get("/products/:id", getProductController)
routes.delete("/products/:id", deleteProductController)
routes.put("/products/:id", updateProductController)

export { routes }
