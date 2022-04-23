import { Router } from "express"
import { createProductController } from "./controllers/createProductController"
import { deleteProductController } from "./controllers/DeleteCategoryController"
import { getAllProductsController } from "./controllers/getAllProductsController"
import { getProductController } from "./controllers/getProductController"
import { updateProductController } from "./controllers/updateProductController"

const routes = Router()

routes.post("/products", createProductController)
routes.get("/products", getAllProductsController)
routes.get("/products/:id", getProductController)
routes.delete("/products/:id", deleteProductController)
routes.put("/products/:id", updateProductController)

export { routes }
